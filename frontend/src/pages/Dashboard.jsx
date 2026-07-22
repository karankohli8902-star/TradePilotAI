import { generateSignal } from "../services/aiService";
import { useState, useEffect, useContext } from "react";
import { getMarketData } from "../services/marketService";
import { MarketContext } from "../context/MarketContext";
import Watchlist from "../components/Watchlist";
import MarketStatus from "../components/MarketStatus";
import SignalCard from "../components/SignalCard";
import MarketCard from "../components/MarketCard";

function Dashboard() {
  const niftyAI = generateSignal(marketData?.nifty?.trend);
const sensexAI = generateSignal(marketData?.sensex?.trend);
  const { selectedMarket, setSelectedMarket } = useContext(MarketContext);
  const [marketData, setMarketData] = useState(null);
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
      <SignalCard />

      <div className="cards">
        <MarketCard
          market="NIFTY 50"
          price={marketData?.nifty.price || "Loading..."}
trend={marketData?.nifty.trend || "Loading..."}
signal={niftyAI.signal}
entry={marketData?.nifty.entry || "--"}
stopLoss={marketData?.nifty.stopLoss || "--"}
target={marketData?.nifty.target || "--"}
        />

        <MarketCard
          market="SENSEX"
         price={marketData?.sensex.price || "Loading..."}
trend={marketData?.sensex.trend || "Loading..."}
signal={sensexAI.signal}
entry={marketData?.sensex.entry || "--"}
stopLoss={marketData?.sensex.stopLoss || "--"}
target={marketData?.sensex.target || "--"}
        />
      </div>
    </>
  );
}

export default Dashboard;