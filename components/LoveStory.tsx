'use client';
import { motion } from 'framer-motion';

export default function LoveStory() {
  const items = [
    'How we met',
    'First conversation',
    'First date',
    'Forever begins',
  ];

  return (
    <section style={{ padding: 40 }}>
      <h2 style={{ fontSize: 40, fontFamily: 'serif' }}>Our Love Story</h2>
      {items.map((i, idx) => (
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          style={{ opacity: 0.8, marginTop: 10 }}
        >
          {i}
        </motion.p>
      ))}
    </section>
  );
}