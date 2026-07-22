import LiveClock from "./LiveClock";
function Header() {
  return (
    <header className="header">
      <h1>📈 TradePilot AI</h1>
      <p>AI Powered Nifty & Sensex Trading Dashboard</p>

      <LiveClock />
    </header>
  );
}

export default Header;