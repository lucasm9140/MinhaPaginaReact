import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Lucas Matheus</Link>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <Link href="/">
            <FaHome /> Início
          </Link>
        </li>
        <li>
          <Link href="/about">
            <FaUser /> Sobre Mim
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <FaProjectDiagram /> Projetos
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <FaCode /> Habilidades
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <FaEnvelope /> Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
