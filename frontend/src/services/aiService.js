export function generateSignal(trend) {
  if (trend === "Bullish") {
    return {
      signal: "BUY",
      confidence: 82,
      color: "green",
      reason: [
        "EMA 20 > EMA 50",
        "RSI above 50",
        "Price above Support"
      ]
    };
  }

  if (trend === "Bearish") {
    return {
      signal: "SELL",
      confidence: 80,
      color: "red",
      reason: [
        "EMA 20 < EMA 50",
        "RSI below 50",
        "Resistance Rejection"
      ]
    };
  }

  return {
    signal: "NO TRADE",
    confidence: 40,
    color: "orange",
    reason: [
      "Market is Sideways"
    ]
  };
}