function generateAISignal(market) {
  const trend = market.trend;

  if (trend === "Bullish") {
    return {
      signal: "BUY",
      confidence: 82,
      reason: [
        "Trend is Bullish",
        "Momentum Positive",
      ],
    };
  }

  if (trend === "Bearish") {
    return {
      signal: "SELL",
      confidence: 80,
      reason: [
        "Trend is Bearish",
        "Momentum Negative",
      ],
    };
  }

  return {
    signal: "NO TRADE",
    confidence: 45,
    reason: [
      "Market is Sideways",
    ],
  };
}

module.exports = { generateAISignal };