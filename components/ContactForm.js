"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus("Enviado com sucesso!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        required
        placeholder="Nome"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        required
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        required
        placeholder="Mensagem"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  );
}
