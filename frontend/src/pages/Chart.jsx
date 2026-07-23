import { useContext } from "react";
import { MarketContext } from "../context/MarketContext";
import LightweightChart from "../components/LightweightChart";

function Chart() {
  const { selectedMarket } = useContext(MarketContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        📈 {selectedMarket} Live Chart
      </h1>

      <LightweightChart market={selectedMarket} />
    </div>
  );
}

export default Chart;