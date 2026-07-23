const { calculateEMA } = require("./ai/indicatorEngine");
const { getCandles } = require("./services/candleService");
const { getMarketData } = require("./services/marketService");
const { generateAISignal } = require("./ai/signalEngine");
const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/market", async (req, res) => {
  try {
    const marketData = await getMarketData();

    res.json(marketData);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch market data",
    });
  }
});
app.get("/api/candles/:market", async (req, res) => {
  const candles = await getCandles(req.params.market);
  res.json(candles);
});
app.get("/api/test-ema", (req, res) => {
  const prices = [24100, 24150, 24200, 24250, 24300];

  const ema20 = calculateEMA(prices, 20);

  res.json({
    prices,
    ema20,
  });
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});