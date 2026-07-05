export default function Gallery() {
  return (
    <section style={{ padding: 100 }}>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 15,
        marginTop: 40
      }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              height: 180,
              borderRadius: 16,
              background: "#1a1a1a",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        ))}
      </div>
    </section>
  );
}