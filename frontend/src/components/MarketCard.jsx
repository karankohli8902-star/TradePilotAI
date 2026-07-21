function MarketCard({
  market,
  price,
  trend,
  signal,
  entry,
  stopLoss,
  target,
}) {
  return (
    <div className="card">
      <h2>{market}</h2>

      <p><strong>Price:</strong> {price}</p>
      <p><strong>Trend:</strong> {trend}</p>
      <p>
  <strong>Signal:</strong>
  <span className={`badge ${signal}`}>
    {signal}
  </span>
</p>
      <p><strong>Entry:</strong> {entry}</p>
      <p><strong>Stop Loss:</strong> {stopLoss}</p>
      <p><strong>Target:</strong> {target}</p>
    </div>
  );
}

export default MarketCard;