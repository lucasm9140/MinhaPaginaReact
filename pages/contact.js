import Head from "next/head";
import styles from "../styles/Contact.module.css";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contato | Lucas Matheus</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main} style={{ padding: "40px 20px" }}>
          <h1>📫 Como me encontrar</h1>
          <p>Email: lucas.jesus6@aluno.senai.br</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/lucas-matheus-rodrigues-de-jesus-285890279" target="_blank">Meu Perfil</a></p>
          <p>GitHub: <a href="https://github.com/seuUsuario" target="_blank">github.com/seuUsuario</a></p>
        {/* Formulário de contato */}
          <section style={{ marginTop: "2rem" }}>
          <h2>Envie uma mensagem</h2>
          <ContactForm />
          </section>
        </main>
      </div>
    </>
  );
};

export default contact;
