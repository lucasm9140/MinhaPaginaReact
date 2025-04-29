import Head from "next/head";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Habilidades | Lucas Matheus</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>🛠️ Minhas Habilidades Técnicas</h1>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Linguagens</h3>
              <p>Python, Java, C, JavaScript</p>
            </div>

            <div className={styles.skillCard}>
              <h3>Frameworks & Bibliotecas</h3>
              <p>
                <strong>Python:</strong> Flask, FastAPI, Django, NumPy, Pandas, Matplotlib, Sklearn, Seaborn, Streamlit, Pytorch, TensorFlow<br />
                <strong>Java:</strong> JavaFX, JFrame, Spring Boot, JDBC, Maven
              </p>
            </div>

            <div className={styles.skillCard}>
              <h3>Ferramentas</h3>
              <p>Git, GitHub, VS Code, Eclipse, IntelliJ, NetBeans, Arduino, Google Colab</p>
            </div>

            <div className={styles.skillCard}>
              <h3>Outros Conhecimentos</h3>
              <p>HTML, CSS, Bootstrap, Thymeleaf, Machine Learning, Deep Learning, Análise de Dados, Mineração de Texto</p>
            </div>

            <div className={styles.skillCard}>
              <h3>Bancos de Dados</h3>
              <p>MySQL, SQLite, H2</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Skills;
