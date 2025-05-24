// components/Layout.js
"use client";  // << ATENÇÃO: tem que vir antes de qualquer import!
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

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
