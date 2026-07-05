"use client";
import { useState } from "react";

export default function RSVP() {
  const [sent, setSent] = useState(false);

  return (
    <section style={{ padding: 100 }}>
      <h2 style={{ textAlign: "center" }}>RSVP</h2>

      <div className="glass" style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 30
      }}>
        <input placeholder="Name" style={{ width: "100%", marginBottom: 10 }} />
        <input placeholder="Phone" style={{ width: "100%", marginBottom: 10 }} />
        <textarea placeholder="Message" style={{ width: "100%" }} />

        <button
          onClick={() => setSent(true)}
          style={{
            marginTop: 20,
            width: "100%",
            padding: 12,
            background: "#c9a46a",
            border: "none"
          }}
        >
          {sent ? "Sent 💍" : "Send RSVP"}
        </button>
      </div>
    </section>
  );
}