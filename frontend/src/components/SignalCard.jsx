function SignalCard({ signal, confidence, reason }) {
  return (
    <section className="signal">
      <h2>🤖 AI Signal</h2>

      <h1>{signal}</h1>

      <h3>Confidence: {confidence}%</h3>

      <h4>Reason</h4>

      <ul style={{ marginTop: "15px", textAlign: "left", display: "inline-block" }}>
        {reason.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </section>
  );
}

export default SignalCard;