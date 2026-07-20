import "./App.css";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>📈 TradePilot AI</h1>
        <p>AI Powered Nifty & Sensex Trading Dashboard</p>
      </header>

      <section className="signal">
        <h2>🔥 AI Signal</h2>
        <h1>NO TRADE</h1>
        <p>Waiting for High Probability Setup...</p>
      </section>

      <div className="cards">

        <div className="card">
          <h2>NIFTY 50</h2>

          <p>Price : Loading...</p>
          <p>Trend : Waiting...</p>
          <p>Signal : No Trade</p>
          <p>Entry : --</p>
          <p>Stop Loss : --</p>
          <p>Target : --</p>

        </div>

        <div className="card">

          <h2>SENSEX</h2>

          <p>Price : Loading...</p>
          <p>Trend : Waiting...</p>
          <p>Signal : No Trade</p>
          <p>Entry : --</p>
          <p>Stop Loss : --</p>
          <p>Target : --</p>

        </div>

      </div>

    </div>
  );
}

export default App;