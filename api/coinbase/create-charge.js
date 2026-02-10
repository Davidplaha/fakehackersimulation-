// Vercel Serverless Function: Create a Coinbase Commerce charge for the SimDeck donation.
//
// Required env vars (set in Vercel project settings):
// - COINBASE_COMMERCE_API_KEY
//
// Optional:
// - COINBASE_COMMERCE_API_VERSION (default: 2018-03-22)
// - DONATION_AMOUNT_USD (default: 5.00)

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

async function readJson(req) {
  if (req.body && typeof req.body === "object") return req.body;
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  return JSON.parse(raw);
}

function getBaseUrl(req) {
  const inferred = req.socket && req.socket.encrypted ? "https" : "http";
  const proto = (req.headers["x-forwarded-proto"] || inferred).split(",")[0].trim();
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "").split(",")[0].trim();
  if (!host) return null;
  return `${proto}://${host}`;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const apiKey = process.env.COINBASE_COMMERCE_API_KEY;
  if (!apiKey) return sendJson(res, 500, { error: "Server not configured (missing COINBASE_COMMERCE_API_KEY)" });

  let body;
  try {
    body = await readJson(req);
  } catch {
    return sendJson(res, 400, { error: "Invalid JSON body" });
  }

  const deviceId = body && typeof body.deviceId === "string" ? body.deviceId.trim() : "";
  if (!deviceId || deviceId.length > 200) return sendJson(res, 400, { error: "Invalid deviceId" });

  const baseUrl = getBaseUrl(req);
  const redirectUrl = baseUrl ? `${baseUrl}/?donation=success` : undefined;
  const cancelUrl = baseUrl ? `${baseUrl}/?donation=cancel` : undefined;

  const version = process.env.COINBASE_COMMERCE_API_VERSION || "2018-03-22";
  const amountUsd = process.env.DONATION_AMOUNT_USD || "5.00";

  const payload = {
    name: "SimDeck Donation",
    description: "Support SimDeck (donation unlocks Premium Mode on this device).",
    pricing_type: "fixed_price",
    local_price: { amount: String(amountUsd), currency: "USD" },
    metadata: {
      deviceId,
      product: "simdeck",
      kind: "donation",
    },
    ...(redirectUrl ? { redirect_url: redirectUrl } : {}),
    ...(cancelUrl ? { cancel_url: cancelUrl } : {}),
  };

  try {
    const resp = await fetch("https://api.commerce.coinbase.com/charges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CC-Api-Key": apiKey,
        "X-CC-Version": version,
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    let json = null;
    try { json = JSON.parse(text); } catch { /* ignore */ }

    if (!resp.ok) {
      return sendJson(res, resp.status, {
        error: "Coinbase Commerce error",
        details: json || text,
      });
    }

    const charge = json && json.data ? json.data : null;
    if (!charge || !charge.hosted_url || !charge.code) {
      return sendJson(res, 502, { error: "Unexpected Coinbase response" });
    }

    return sendJson(res, 200, {
      hosted_url: charge.hosted_url,
      code: charge.code,
      expires_at: charge.expires_at || null,
    });
  } catch (err) {
    return sendJson(res, 500, { error: "Failed to create charge", message: String(err && err.message ? err.message : err) });
  }
};
