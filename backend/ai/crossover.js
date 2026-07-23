function checkEMACrossover(ema20, ema50) {
  if (ema20 > ema50) {
    return {
      signal: "BUY",
      reason: "EMA 20 crossed above EMA 50",
    };
  }

  if (ema20 < ema50) {
    return {
      signal: "SELL",
      reason: "EMA 20 crossed below EMA 50",
    };
  }

  return {
    signal: "NO TRADE",
    reason: "EMA values are equal",
  };
}

module.exports = { checkEMACrossover };