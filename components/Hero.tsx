"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "radial-gradient(circle at top, #2a1b14, #0b0814)"
    }}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: 78,
          fontFamily: "serif",
          letterSpacing: 1
        }}
      >
        Mirabel & Godspower
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ fontSize: 18 }}
      >
        A Love Story Written by Destiny
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ color: "#c9a46a" }}
      >
        #GPmeetsMeerah
      </motion.p>
    </section>
  );
}