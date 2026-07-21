export async function getMarketData() {
  return {
    nifty: {
      price: "24,350",
      trend: "Bullish",
      signal: "BUY",
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
  };
}