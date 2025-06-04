"use client"; 
// << ATENÇÃO: tem que vir antes de qualquer import!
import styles from "../styles/Footer.module.css"; 
// Caminho do arquivo CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Lucas | Desenvolvido com Next.js</p>
    </footer>
  );
};
console.log("🔍 Footer loaded:", Footer);
export default Footer;
