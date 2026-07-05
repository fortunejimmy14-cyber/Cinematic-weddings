export default function Venue() {
  return (
    <section style={{ padding: 100 }}>
      <h2 style={{ textAlign: "center" }}>Venue Details</h2>

      <div style={{
        display: "grid",
        gap: 20,
        maxWidth: 700,
        margin: "40px auto"
      }}>
        <div className="glass">Traditional Marriage — Kano</div>
        <div className="glass">Church Wedding — Kano</div>
        <div className="glass">Reception — Event Center</div>
      </div>
    </section>
  );
}