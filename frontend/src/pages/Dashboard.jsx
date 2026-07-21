import SignalCard from "../components/SignalCard";
import MarketCard from "../components/MarketCard";

function Dashboard() {
  return (
    <>
      <SignalCard />

      <div className="cards">
        <MarketCard
          market="NIFTY 50"
          price="24,350"
          trend="Bullish"
          signal="BUY"
          entry="24,360"
          stopLoss="24,300"
          target="24,500"
        />

        <MarketCard
          market="SENSEX"
          price="80,150"
          trend="Bullish"
          signal="BUY"
          entry="80,200"
          stopLoss="80,050"
          target="80,500"
        />
      </div>
    </>
  );
}

export default Dashboard;