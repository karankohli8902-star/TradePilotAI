import { useNavigate } from "react-router-dom";
function Watchlist({ selectedMarket, setSelectedMarket }) {
    const navigate = useNavigate();
  const markets = [
    "NIFTY",
    "BANKNIFTY",
    "SENSEX",
    "FINNIFTY",
    "MIDCPNIFTY",
    "GOLD",
    "CRUDE OIL",
    "USDINR",
  ];

  return (
    <div className="watchlist">
      <h2>📊 Watchlist</h2>

      {markets.map((item) => (
        <button
          key={item}
          className={`watch-btn ${
            selectedMarket === item ? "active-btn" : ""
          }`}
         onClick={() => {
  setSelectedMarket(item);
  navigate("/chart");
}}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Watchlist;