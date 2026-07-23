import { getCandles } from "../services/candleService";
import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

function LightweightChart({ market }) {
  const chartContainerRef = useRef(null);

 useEffect(() => {
  async function loadChart() {
    const candles = await getCandles(market);

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 600,
      layout: {
        background: { color: "#131722" },
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: { color: "#2A2E39" },
        horzLines: { color: "#2A2E39" },
      },
    });

    const candleSeries = chart.addCandlestickSeries();

    candleSeries.setData(candles);

    chart.timeScale().fitContent();

    return chart;
  }

  let chart;

  loadChart().then((c) => {
    chart = c;
  });

  return () => {
    if (chart) chart.remove();
  };
}, [market]);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: "100%",
        height: "600px",
      }}
    />
  );
}

export default LightweightChart;