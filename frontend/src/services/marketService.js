export async function getMarketData() {
  const response = await fetch("http://localhost:5000/api/market");

  const data = await response.json();

  return data;
}