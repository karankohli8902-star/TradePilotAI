async function getCandles(market) {
  const candleData = {
    nifty: [
      { time: "2026-07-20", open: 24100, high: 24220, low: 24080, close: 24180 },
      { time: "2026-07-21", open: 24180, high: 24300, low: 24150, close: 24280 },
      { time: "2026-07-22", open: 24280, high: 24400, low: 24250, close: 24350 },
    ],

    banknifty: [
      { time: "2026-07-20", open: 56000, high: 56200, low: 55950, close: 56150 },
      { time: "2026-07-21", open: 56150, high: 56300, low: 56100, close: 56280 },
      { time: "2026-07-22", open: 56280, high: 56450, low: 56220, close: 56390 },
    ],

    gold: [
      { time: "2026-07-20", open: 98500, high: 98700, low: 98450, close: 98650 },
      { time: "2026-07-21", open: 98650, high: 98900, low: 98600, close: 98800 },
      { time: "2026-07-22", open: 98800, high: 99000, low: 98720, close: 98950 },
    ],

    crudeoil: [
      { time: "2026-07-20", open: 6020, high: 6035, low: 5980, close: 6000 },
      { time: "2026-07-21", open: 6000, high: 6010, low: 5965, close: 5980 },
      { time: "2026-07-22", open: 5980, high: 5995, low: 5940, close: 5960 },
    ],

    usdinr: [
      { time: "2026-07-20", open: 86.00, high: 86.20, low: 85.95, close: 86.10 },
      { time: "2026-07-21", open: 86.10, high: 86.25, low: 86.05, close: 86.18 },
      { time: "2026-07-22", open: 86.18, high: 86.30, low: 86.10, close: 86.25 },
    ],
  };

  return candleData[market] || candleData.nifty;
}

module.exports = { getCandles };