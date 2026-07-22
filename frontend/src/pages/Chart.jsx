import { useContext } from "react";
import { MarketContext } from "../context/MarketContext";
import TradingChart from "../components/TradingChart";

function Chart() {
  const { selectedMarket } = useContext(MarketContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        📈 {selectedMarket} Live Chart
      </h1>

      <TradingChart market={selectedMarket} />
    </div>
  );
}

export default Chart;