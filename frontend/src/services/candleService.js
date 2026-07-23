export async function getCandles(market) {
  const response = await fetch(
    `http://localhost:5000/api/candles/${market.toLowerCase()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch candle data");
  }

  return await response.json();
}