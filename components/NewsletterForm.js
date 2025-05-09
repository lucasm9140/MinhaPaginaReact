"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) setMsg("Obrigado pela inscrição!");
    else setMsg("Falha ao inscrever.");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        required
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Inscrever</button>
      {msg && <p>{msg}</p>}
    </form>
  );
}
