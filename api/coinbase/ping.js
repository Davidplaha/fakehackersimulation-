// Simple health/config check for Coinbase Commerce endpoints.
// This is useful for localhost / static hosting diagnostics.

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return sendJson(res, 405, {error: "Method not allowed"});
  }

  const configured = Boolean(process.env.COINBASE_COMMERCE_API_KEY);
  return sendJson(res, 200, {
    ok: true,
    configured,
  });
};

