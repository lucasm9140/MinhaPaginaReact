// pages/auth/signin.js
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
// Não se faz esse tipo de import em api
// import '../styles/globals.css';


export default function SignIn({ providers }) {
  return (
    <>
      <Head><title>Login | Lucas</title></Head>
      <main className={styles.container}>
        <h1>Login ou Cadastre-se</h1>
        {Object.values(providers).map(provider => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Entrar com {provider.name}
            </button>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}