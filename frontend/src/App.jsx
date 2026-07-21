import TradingChart from "./components/TradingChart";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MarketCard from "./components/MarketCard";
import SignalCard from "./components/SignalCard";
import { getMarketData } from "./services/marketService";
function App() {
  const [marketData, setMarketData] = useState(null);

useEffect(() => {
  async function loadData() {
    const data = await getMarketData();
    setMarketData(data);
  }

  loadData();
}, []);
  return (
    <div className="app">

      <Header />
      <Navbar />

      <SignalCard />

      <div className="cards">

        <MarketCard
  market="NIFTY 50"
  price={marketData?.nifty.price || "Loading..."}
  trend={marketData?.nifty.trend || "Waiting..."}
  signal={marketData?.nifty.signal || "No Trade"}
  entry={marketData?.nifty.entry || "--"}
  stopLoss={marketData?.nifty.stopLoss || "--"}
  target={marketData?.nifty.target || "--"}
/>

        <MarketCard
  market="SENSEX"
  price={marketData?.sensex.price || "Loading..."}
  trend={marketData?.sensex.trend || "Waiting..."}
  signal={marketData?.sensex.signal || "No Trade"}
  entry={marketData?.sensex.entry || "--"}
  stopLoss={marketData?.sensex.stopLoss || "--"}
  target={marketData?.sensex.target || "--"}
/>

      </div>
<TradingChart />
    </div>
  );
}

export default App;