// Vercel Serverless Function: Coinbase Commerce webhook receiver.
//
// Required env vars:
// - COINBASE_COMMERCE_WEBHOOK_SECRET
//
// In Coinbase Commerce dashboard, set the webhook URL to:
//   https://<your-domain>/api/coinbase/webhook
//
// Coinbase signs the raw request body using HMAC SHA-256 with your webhook shared secret.
// Header: X-CC-Webhook-Signature

const crypto = require("crypto");

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

async function readRawBody(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return Buffer.concat(chunks);
}

function timingSafeEqualHex(aHex, bHex) {
  try {
    const a = Buffer.from(String(aHex || ""), "hex");
    const b = Buffer.from(String(bHex || ""), "hex");
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const secret = process.env.COINBASE_COMMERCE_WEBHOOK_SECRET;
  if (!secret) return sendJson(res, 500, { error: "Server not configured (missing COINBASE_COMMERCE_WEBHOOK_SECRET)" });

  const sig = req.headers["x-cc-webhook-signature"];
  if (!sig) return sendJson(res, 400, { error: "Missing X-CC-Webhook-Signature" });

  const raw = await readRawBody(req);
  const expected = crypto.createHmac("sha256", secret).update(raw).digest("hex");
  if (!timingSafeEqualHex(expected, sig)) return sendJson(res, 400, { error: "Invalid signature" });

  let event;
  try {
    event = JSON.parse(raw.toString("utf8"));
  } catch {
    return sendJson(res, 400, { error: "Invalid JSON" });
  }

  // Logging is useful when wiring webhooks; view logs in Vercel.
  try {
    const type = event && event.type ? event.type : "unknown";
    const code = event && event.data && event.data.code ? event.data.code : null;
    console.log("[coinbase-webhook]", type, code ? `code=${code}` : "");
  } catch {
    // ignore
  }

  // We don't persist anything here; the client verifies by calling /api/coinbase/status.
  return sendJson(res, 200, { ok: true });
};

