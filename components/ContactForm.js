// components/ContactForm.js
"use client";
import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) setStatus('Mensagem enviada!');
    else setStatus('Erro ao enviar.');
    setData({ name: '', email: '', message: '' });
  }
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nome"
        value={data.name}
        onChange={e => setData({ ...data, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={e => setData({ ...data, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Mensagem"
        value={data.message}
        onChange={e => setData({ ...data, message: e.target.value })}
        required
      />
      <button type="submit">Enviar</button>
      {status && <p className={styles.status}>{status}</p>}
    </form>
)}
