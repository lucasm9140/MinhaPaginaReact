import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div>
      <h1>Login</h1>
      {Object.values(providers).map((prov) => (
        <div key={prov.name}>
          <button onClick={() => signIn(prov.id)}>
            Sign in with {prov.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}
