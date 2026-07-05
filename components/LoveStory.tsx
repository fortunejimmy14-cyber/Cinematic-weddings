export default function LoveStory() {
  return (
    <section style={{ padding: "120px 30px" }}>
      <h2 style={{ fontSize: 40, textAlign: "center" }}>
        Our Love Story
      </h2>

      <div style={{
        maxWidth: 800,
        margin: "60px auto",
        display: "flex",
        flexDirection: "column",
        gap: 40
      }}>
        <div className="glass">
          <h3>Chapter 1 — The Beginning</h3>
          <p>Two strangers. One unexpected connection.</p>
        </div>

        <div className="glass">
          <h3>Chapter 2 — The Journey</h3>
          <p>Every moment brought us closer together.</p>
        </div>

        <div className="glass">
          <h3>Chapter 3 — Forever</h3>
          <p>And now… we become one.</p>
        </div>
      </div>
    </section>
  );
}