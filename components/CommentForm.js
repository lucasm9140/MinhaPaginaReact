"use client";
import { useState } from "react";

export default function CommentForm() {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    setSent(true);
  }

  if (sent) return <p>Comentário enviado!</p>;
  return (
    <form onSubmit={onSubmit}>
      <textarea
        placeholder="Seu comentário"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <button type="submit">Comentar</button>
    </form>
  );
}
