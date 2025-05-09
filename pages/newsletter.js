import { useSession } from "next-auth/react";
import VerifyNotice from "../components/VerifyNotice";
import CommentForm from "../components/CommentForm";
import ReactionButtons from "../components/ReactionButtons";

export default function Newsletter() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Minha Newsletter</h1>
      <p>Conteúdo da newsletter…</p>

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
