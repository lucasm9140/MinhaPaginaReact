import Head from "next/head";
import styles from "../styles/about.module.css";

const formacoes = [
  "Técnico em Desenvolvimento de Sistemas - SENAI SIG (Concluído)",
  "Cursando Análise e Desenvolvimento de Sistemas - Uninter (EAD)",
  "Cursando FullStack - SENAI (EAD)",
  "Cursando Defesa Cibernética - SENAI/CISCO",
  "Curso de inglês - Nível Intermediário",
];

const certificados = [
  "Soft Skills",
  "Desenvolvedor Python",
  "Aperfeiçoamento em PCA - Cisco NetAcad",
  "Inteligência Artificial",
];

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre | Lucas Matheus</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={`${styles.title} ${styles.sectionBlock}`}>📚 Formação & Certificados</h1>
          <div className={styles.sectionBlock}>
            {formacoes.map((item, index) => (
              <p key={index} className={styles.textBlock}>- {item}</p>
            ))}
          </div>

          <h2 className={`${styles.subtitle} ${styles.sectionBlock}`}>🎓 Certificados</h2>
          <ul className={`${styles.certList} ${styles.sectionBlock}`}>
            {certificados.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default About;