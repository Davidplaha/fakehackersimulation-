// Vercel Serverless Function: Check a Coinbase Commerce charge status.
//
// Required env vars:
// - COINBASE_COMMERCE_API_KEY
//
// Body (POST JSON):
// - code: Coinbase charge code
// - deviceId: the device id used when creating the charge

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

function lastTimelineStatusUpper(charge) {
  const tl = Array.isArray(charge && charge.timeline) ? charge.timeline : [];
  if (!tl.length) return "";
  const s = tl[tl.length - 1] && tl[tl.length - 1].status;
  return String(s || "").toUpperCase();
}

function isPaidStatus(statusUpper) {
  // Coinbase Commerce typically uses timeline statuses like: NEW, PENDING, COMPLETED.
  // Some docs/events mention CONFIRMED/RESOLVED; treat those as paid too.
  return ["PENDING", "COMPLETED", "CONFIRMED", "RESOLVED"].includes(statusUpper);
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

  const code = body && typeof body.code === "string" ? body.code.trim() : "";
  const deviceId = body && typeof body.deviceId === "string" ? body.deviceId.trim() : "";
  if (!code) return sendJson(res, 400, { error: "Missing code" });
  if (!deviceId) return sendJson(res, 400, { error: "Missing deviceId" });

  const version = process.env.COINBASE_COMMERCE_API_VERSION || "2018-03-22";

  try {
    const resp = await fetch(`https://api.commerce.coinbase.com/charges/${encodeURIComponent(code)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CC-Api-Key": apiKey,
        "X-CC-Version": version,
      },
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
    if (!charge) return sendJson(res, 502, { error: "Unexpected Coinbase response" });

    const metaDeviceId = charge.metadata && typeof charge.metadata.deviceId === "string" ? charge.metadata.deviceId : "";
    if (metaDeviceId && metaDeviceId !== deviceId) {
      return sendJson(res, 403, { error: "Charge does not match this device" });
    }

    const status = lastTimelineStatusUpper(charge);
    return sendJson(res, 200, {
      code: charge.code || code,
      status,
      paid: isPaidStatus(status),
      // Useful for support/debug without exposing too much.
      pricing: charge.pricing && charge.pricing.local ? charge.pricing.local : null,
      hosted_url: charge.hosted_url || null,
    });
  } catch (err) {
    return sendJson(res, 500, { error: "Failed to fetch status", message: String(err && err.message ? err.message : err) });
  }
};

