const yahooFinance = require("yahoo-finance2").default;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/market", async (req, res) => {
  try {
    const nifty = await yahooFinance.quote("^NSEI");

    res.json({
      nifty: {
        price: nifty.regularMarketPrice,
        trend:
          nifty.regularMarketChange >= 0 ? "Bullish" : "Bearish",
        signal: "Waiting...",
        entry: "--",
        stopLoss: "--",
        target: "--",
      },

      sensex: {
        price: "Loading...",
        trend: "Loading...",
        signal: "Loading...",
        entry: "--",
        stopLoss: "--",
        target: "--",
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch market data",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});