import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Python IA - Gestão Financeira",
    description: "Inteligência artificial para gestão de gastos pessoais e empresariais.",
    link: "https://github.com/seuUsuario/projeto-python-ia"
  },
  // ... outros projetos
];

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projetos | Lucas Matheus</title>
        <meta name="description" content="Portfólio de projetos desenvolvidos por Lucas Matheus" />
      </Head>
      
      <div className={styles.container}>
        <main className={styles.main} aria-label="Lista de projetos">
          <h1 className={styles.title}>🌟 Projetos Completos</h1>
          
          <div className={styles.cardsContainer} role="list">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className={styles.card}
                role="listitem"
                aria-labelledby={`project-${index}-title`}
              >
                <h2 id={`project-${index}-title`} className={styles.cardTitle}>
                  {project.title}
                </h2>
                <p className={styles.cardDescription}>{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  aria-label={`Ver detalhes do projeto ${project.title} no GitHub`}
                >
                  Ver no GitHub ↗
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;