function MarketStatus() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();

  const currentTime = hours * 60 + minutes;

  const marketOpen = 9 * 60 + 15;   // 9:15 AM
  const marketClose = 15 * 60 + 30; // 3:30 PM

  const isOpen = currentTime >= marketOpen && currentTime <= marketClose;

  return (
    <section className="market-status">
      <h2>{isOpen ? "🟢 Market OPEN" : "🔴 Market CLOSED"}</h2>

      <p>NSE Trading Hours</p>

      <p>09:15 AM - 03:30 PM (IST)</p>
    </section>
  );
}

export default MarketStatus;