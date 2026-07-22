export function generateSignal(trend) {
  if (trend === "Bullish") {
    return {
      signal: "BUY",
      color: "green",
    };
  }

  if (trend === "Bearish") {
    return {
      signal: "SELL",
      color: "red",
    };
  }

  return {
    signal: "NO TRADE",
    color: "orange",
  };
}