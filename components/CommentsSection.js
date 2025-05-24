// components/CommentsSection.js
"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

export default function CommentsSection() {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/api/comments")
      .then((r) => r.json())
      .then(setComments);
  }, []);

  async function submit() {
    if (!text) return;
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setText("");
    const updated = await fetch("/api/comments").then((r) => r.json());
    setComments(updated);
  }

  if (!session)
    return (
      <p>
        Você precisa{" "}
        <button onClick={() => signIn()}>entrar</button> para ver/comentar.
      </p>
    );

  return (
    <section>
      <h3>Comentários</h3>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>Enviar</button>
      <ul>
        {comments.map((c) => (
          <li key={c._id}>
            <strong>{c.email.split("@")[0]}:</strong> {c.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

