async function getMarketData() {
  return {
    nifty: {
      price: 24350,
      trend: "Bullish",
      entry: 24360,
      stopLoss: 24300,
      target: 24500,
    },

    banknifty: {
      price: 56120,
      trend: "Bullish",
      entry: 56150,
      stopLoss: 56020,
      target: 56350,
    },

    sensex: {
      price: 80150,
      trend: "Bullish",
      entry: 80200,
      stopLoss: 80050,
      target: 80500,
    },

    finnifty: {
      price: 26780,
      trend: "Bullish",
      entry: 26800,
      stopLoss: 26720,
      target: 26950,
    },

    midcpnifty: {
      price: 14250,
      trend: "Bullish",
      entry: 14270,
      stopLoss: 14200,
      target: 14350,
    },

    gold: {
      price: 98750,
      trend: "Bullish",
      entry: 98800,
      stopLoss: 98650,
      target: 99050,
    },

    crudeoil: {
      price: 5985,
      trend: "Bearish",
      entry: 5975,
      stopLoss: 6010,
      target: 5930,
    },

    usdinr: {
      price: 86.15,
      trend: "Bullish",
      entry: 86.20,
      stopLoss: 86.05,
      target: 86.40,
    },
  };
}

module.exports = { getMarketData };