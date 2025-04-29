// components/CommentForm.js
"use client";
import { useState } from "react";

export default function CommentForm() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ email, comment }),
    });
    if (res.ok) setSent(true);
  }

  if (sent) return <p>Obrigado pelo comentário!</p>;
  return (
    <form onSubmit={onSubmit}>
      <input type="email" placeholder="Seu e-mail" value={email}
             onChange={e=>setEmail(e.target.value)} required />
      <textarea placeholder="Comentário" value={comment}
                onChange={e=>setComment(e.target.value)} required />
      <button type="submit">Enviar</button>
    </form>
  );
}
