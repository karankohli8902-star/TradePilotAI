import { generateSignal } from "../services/aiService";
import { useState, useEffect, useContext } from "react";
import { getMarketData } from "../services/marketService";
import { MarketContext } from "../context/MarketContext";
import Watchlist from "../components/Watchlist";
import MarketStatus from "../components/MarketStatus";
import SignalCard from "../components/SignalCard";
import MarketCard from "../components/MarketCard";

function Dashboard() {

  const { selectedMarket, setSelectedMarket } = useContext(MarketContext);
  const [marketData, setMarketData] = useState(null);
   const niftyAI = generateSignal(marketData?.nifty?.trend);
const sensexAI = generateSignal(marketData?.sensex?.trend);
  useEffect(() => {
  async function loadData() {
    const data = await getMarketData();
    setMarketData(data);
  }

  loadData();

  const interval = setInterval(loadData, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <>
     <Watchlist
  selectedMarket={selectedMarket}
  setSelectedMarket={setSelectedMarket}
/><h2 style={{ textAlign: "center", marginTop: "20px", color: "#f0b90b" }}>
  Selected Market: {selectedMarket}
</h2>
      <MarketStatus />
     <SignalCard
  signal={niftyAI.signal}
  confidence={niftyAI.confidence}
  reason={niftyAI.reason}
/>

      <div className="cards">
  {marketData &&
    Object.entries(marketData).map(([key, market]) => {
      const ai = generateSignal(market.trend);

      return (
        <MarketCard
          key={key}
          market={key.toUpperCase()}
          price={market.price}
          trend={market.trend}
          signal={ai.signal}
          entry={market.entry || "--"}
          stopLoss={market.stopLoss || "--"}
          target={market.target || "--"}
        />
      );
    })}
</div>
    </>
  );
}

export default Dashboard;