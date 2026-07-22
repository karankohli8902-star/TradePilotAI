import { useEffect, useRef } from "react";

function TradingChart({ market }) {
  const chartRef = useRef(null);

  useEffect(() => {
    chartRef.current.innerHTML = "";

    const symbols = {
      NIFTY: "NSE:NIFTY",
      BANKNIFTY: "NSE:BANKNIFTY",
      SENSEX: "BSE:SENSEX",
      FINNIFTY: "NSE:FINNIFTY",
      MIDCPNIFTY: "NSE:MIDCPNIFTY",
      GOLD: "MCX:GOLD",
      "CRUDE OIL": "MCX:CRUDEOIL",
      USDINR: "FX_IDC:USDINR",
    };

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbols[market] || "NSE:NIFTY",
      interval: "15",
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      hide_top_toolbar: false,
      save_image: true,
    });

    chartRef.current.appendChild(script);
  }, [market]);

  return (
    <div
      ref={chartRef}
      className="tradingview-widget-container"
      style={{
        height: "600px",
        width: "90%",
        margin: "30px auto",
      }}
    />
  );
}

export default TradingChart;