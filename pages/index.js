import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import heroBackground from "../public/fundo1.jpg";
import project1 from "../public/proj.png";
import project2 from "../public/java.jpg";
import project3 from "../public/erp.jpg";

const projects = [
  {
    img: project1,
    title: "IA Gestão Financeira",
    desc: "Sistema inteligente para controle financeiro pessoal e empresarial desenvolvido com Python.",
    link: "https://github.com/seuUsuario/projeto-python-ia",
  },
  {
    img: project2,
    title: "ERP Web em Java",
    desc: "Plataforma completa de agendamento e gestão financeira para empresas de serviços.",
    link: "https://github.com/seuUsuario/erp-java",
  },
  {
    img: project3,
    title: "ERP Python - Estoque",
    desc: "Sistema de gestão de estoque e vendas com análise preditiva de desempenho.",
    link: "https://github.com/seuUsuario/erp-python",
  },
];

const Home = () => {
  const [nome, setNome] = useState("");
  const [nomeFinal, setNomeFinal] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!nome.trim()) {
      setError("Por favor, digite seu nome");
      return;
    }

    if (nome.trim().length < 3) {
      setError("Nome deve ter pelo menos 3 caracteres");
      return;
    }

    setNomeFinal(nome.trim());
    setNome("");
  };

  return (
    <>
      <Head>
        <title>Lucas Matheus | Portfólio de TI</title>
        <meta
          name="description"
          content="Portfólio de Lucas Matheus com projetos e habilidades em TI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <div className={styles.pageWrapper}>
        <main className={styles.main}>
          {/* Seção Hero */}
          <section className={styles.hero}>
            <div className={styles.heroBackground}>
              <Image
                src={heroBackground}
                alt="Background tecnológico"
                fill
                priority
                quality={80}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className={styles.heroOverlay} />
            </div>
            
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                {!nomeFinal ? (
                  <>
                    <span className={styles.greeting}>Olá, seja bem-vindo!</span>
                    <form 
                      onSubmit={handleSubmit} 
                      className={styles.nameForm}
                      aria-labelledby="nameFormTitle"
                    >
                      <h2 id="nameFormTitle">Vamos começar</h2>
                      <label htmlFor="nome" className={styles.visuallyHidden}>
                        Qual seu nome?
                      </label>
                      <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite seu nome"
                        aria-required="true"
                      />
                      {error && <p className={styles.errorMessage}>{error}</p>}
                      <button type="submit" aria-label="Confirmar nome">
                        Confirmar
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <span className={styles.greeting}>Olá, {nomeFinal}! 👋</span>
                    <h1>
                      <strong>Meu nome é Lucas Matheus</strong>
                    </h1>
                    <h2>Sou Profissional de tecnologia: 
                      Desenvolvedor de Software,
                      Presto Suporte T.I,
                      Consultorias, e mais...</h2>
                    <p className={styles.heroSubtitle}>
                      Bem-vindo ao meu portfólio profissional, onde tecnologia e criatividade se encontram.
                    </p>
                    <Link 
                      href="/about" 
                      className={styles.ctaButton}
                      aria-label="Saiba mais sobre Lucas Matheus"
                    >
                      Saiba mais sobre mim
                    </Link>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Seção de Projetos */}
          <section className={styles.projects} aria-labelledby="projectsHeading">
            <h2 id="projectsHeading">Projetos Destacados</h2>
            <div className={styles.projectGrid}>
              {projects.map((project, index) => (
                <article key={index} className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={400}
                      height={250}
                      quality={75}
                      placeholder="blur"
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`Ver projeto ${project.title} no GitHub`}
                    >
                      Ver no GitHub →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;