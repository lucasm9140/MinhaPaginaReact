import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";  // Certifique-se de que o caminho está correto

// Caminhos das imagens públicas (sem a necessidade de importar)
const projects = [
  { img: "/proj.png", title: "IA Gestão Financeira", desc: "...", link: "https://..." },
  { img: "/java.jpg", title: "ERP Web em Java", desc: "...", link: "https://..." },
  { img: "/erp.jpg", title: "ERP Python - Estoque", desc: "...", link: "https://..." },
];

export default function Home() {
  const [nome, setNome] = useState("");
  const [nomeFinal, setNomeFinal] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim()) return setError("Por favor, digite seu nome");
    if (nome.trim().length < 3) return setError("Nome deve ter pelo menos 3 caracteres");
    setNomeFinal(nome.trim());
    setNome("");
    setError("");
  }

  return (
    <>
      <Head>
        <title>Lucas Matheus | Portfólio de TI</title>
        <meta name="description" content="Portfólio profissional de Lucas Matheus" />
      </Head>

      <section
        className={styles.hero}
        style={{ backgroundImage: `url('/fundo1.jpg')` }} // Alterado para caminho direto
      >
        <div className={styles.heroContent}>
          {!nomeFinal ? (
            <form onSubmit={handleSubmit} className={styles.nameForm}>
              <h2>Olá, seja bem-vindo!</h2>
              <p>Qual seu nome?</p>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                aria-required="true"
              />
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit">Confirmar</button>
            </form>
          ) : (
            <div>
              <h1>Olá, {nomeFinal}!</h1>
              <h2>Meu nome é Lucas Matheus</h2>
              <p>
                Sou Desenvolvedor de Software, presto suporte de TI, consultorias e mais...
              </p>
            </div>
          )}
        </div>
      </section>

      <section className={styles.projects}>
        <h2>Projetos Destacados</h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src={project.img} alt={project.title} width={300} height={200} />
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <Link href={project.link} className={styles.projectLink}>
                  Ver no GitHub →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
