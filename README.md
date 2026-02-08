# SimDeck (Fake Hacking Simulation)

Safe, fictional UI simulation for visual demos. No real hacking occurs and no real data is accessed.

## Run Locally

```powershell
git clone https://github.com/Davidplaha/fakehackersimulation-.git
cd fakehackersimulation-
node server.js 3001
```

Open `http://localhost:3001/`.

## Donation

Suggested donation: **$5 USD**.

### Coinbase Commerce (Auto-Verified)

This project supports a verified donation flow using Coinbase Commerce + Vercel Serverless Functions.

Vercel environment variables:

- `COINBASE_COMMERCE_API_KEY` (required)
- `COINBASE_COMMERCE_WEBHOOK_SECRET` (recommended, for `/api/coinbase/webhook`)
- `COINBASE_COMMERCE_API_VERSION` (optional, default `2018-03-22`)
- `DONATION_AMOUNT_USD` (optional, default `5.00`)

Coinbase Commerce webhook URL:

- `https://<your-domain>/api/coinbase/webhook`

### Direct Wallet (Manual)

If you also want to accept direct wallet donations (not auto-verified):

- Bitcoin (BTC): `1EyVGQorCXhjAqF8Ry9ADcJLgUr1fqjCem`
- USDT (TRC20): `TKnAsvAnkzguMqq9GrrQz2UFq4wFkrCVSh`
