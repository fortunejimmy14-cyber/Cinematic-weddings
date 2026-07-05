'use client';
import { useState } from 'react';

export default function RSVP() {
  const [f, setF] = useState({ n: '', p: '', m: '' });

  return (
    <section style={{ padding: 40 }}>
      <h2>RSVP</h2>
      <input placeholder='Name' onChange={(e) => setF({ ...f, n: e.target.value })} />
      <input placeholder='Phone' onChange={(e) => setF({ ...f, p: e.target.value })} />
      <textarea placeholder='Message' onChange={(e) => setF({ ...f, m: e.target.value })} />
      <button>Submit</button>
    </section>
  );
}