"use client";
console.log("📬 NewsletterForm loaded:", NewsletterForm);
// components/NewsletterForm.js
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) setStatus('Inscrição realizada!');
    else setStatus('Erro ao inscrever.');
    setEmail('');
  }
  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="email"
        required
        placeholder="seu@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Inscrever-se</button>
      {status && <p>{status}</p>}
    </form>
  );
}