vfunction calculateRSI(prices, period = 14) {
  if (!prices || prices.length < period + 1) {
    return null;
  }

  let gains = 0;
  let losses = 0;

  for (let i = 1; i <= period; i++) {
    const change = prices[i] - prices[i - 1];

    if (change > 0) {
      gains += change;
    } else {
      losses += Math.abs(change);
    }
  }

  const avgGain = gains / period;
  const avgLoss = losses / period;

  if (avgLoss === 0) return 100;

  const rs = avgGain / avgLoss;

  const rsi = 100 - 100 / (1 + rs);

  return Number(rsi.toFixed(2));
}

module.exports = { calculateRSI };