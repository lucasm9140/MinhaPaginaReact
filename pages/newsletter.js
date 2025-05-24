// pages/newsletter.js
import { useSession } from "next-auth/react";
import VerifyNotice from "../components/VerifyNotice";
import CommentForm from "../components/CommentForm";
import ReactionButtons from "../components/ReactionButtons";
import NewsletterForm from "../components/NewsletterForm";

export default function Newsletter() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Minha Newsletter</h1>
      <p>Conteúdo da newsletter…</p>

      {/* Formulário de inscrição para novos assinantes */}
      <NewsletterForm />

      {/* Aviso para verificar o email se não estiver autenticado */}
      <VerifyNotice />

      {session && (
        <>
          <ReactionButtons itemId="newsletter-1" />
          <CommentForm />
        </>
      )}
    </div>
  );
}
