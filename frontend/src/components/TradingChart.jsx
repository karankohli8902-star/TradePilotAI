import { useEffect, useRef } from "react";

function TradingChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NSE:NIFTY",
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
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={chartRef}
      style={{ height: "600px", width: "90%", margin: "30px auto" }}
    >
      <div style={{ height: "100%" }} />
    </div>
  );
}

export default TradingChart;