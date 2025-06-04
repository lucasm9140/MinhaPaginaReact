"use client";  
// << ATENÇÃO: tem que vir antes de qualquer import!
// components/Layout.js
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
console.log("🔍 Layout loaded:", Layout);
export default function Layout({ children }) {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
