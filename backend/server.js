const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/market", (req, res) => {
  res.json({
    nifty: {
      price: "88,888",
      trend: "Bullish",
      signal: "SUPER BUY",
      entry: "24,360",
      stopLoss: "24,300",
      target: "24,500",
    },

    sensex: {
      price: "80,150",
      trend: "Bullish",
      signal: "BUY",
      entry: "80,200",
      stopLoss: "80,050",
      target: "80,500",
    },
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});