// components/Navbar.js
"use client";  // << ATENÇÃO: tem que vir antes de qualquer import!

import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
  FaNewspaper,
  FaSignInAlt,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><Link href="/">Lucas Matheus</Link></div>
      <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        <li><Link href="/"><FaHome /> Home</Link></li>
        <li><Link href="/about"><FaUser /> Sobre</Link></li>
        <li><Link href="/projects"><FaProjectDiagram /> Projetos</Link></li>
        <li><Link href="/skills"><FaCode /> Habilidades</Link></li>
        <li><Link href="/newsletter"><FaNewspaper /> Newsletter</Link></li>
        <li><Link href="/contact"><FaEnvelope /> Contato</Link></li>
        {session ? (
          <li><button onClick={() => signOut()}>Logout</button></li>
        ) : (
          <li><Link href="/auth/signin"><FaSignInAlt /> Login</Link></li>
        )}
      </ul>
    </nav>
)}