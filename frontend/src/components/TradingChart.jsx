import { useEffect, useRef } from "react";

function TradingChart({ symbol }) {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const symbolMap = {
      NIFTY: "NSE:NIFTY",
      BANKNIFTY: "NSE:BANKNIFTY",
      SENSEX: "BSE:SENSEX",
      FINNIFTY: "NSE:FINNIFTY",
      MIDCPNIFTY: "NSE:MIDCPNIFTY",
      GOLD: "TVC:GOLD",
      "CRUDE OIL": "TVC:USOIL",
      USDINR: "FX_IDC:USDINR",
    };

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbolMap[symbol] || "NSE:NIFTY",
      interval: "15",
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: false,
      hide_top_toolbar: false,
      save_image: true,
      studies: [],
    });

    container.current.appendChild(widget);
    container.current.appendChild(script);
  }, [symbol]);

  return (
    <div
      ref={container}
      className="tradingview-widget-container"
      style={{
        height: "650px",
        width: "100%",
      }}
    />
  );
}

export default TradingChart;