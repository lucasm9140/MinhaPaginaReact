"use client";
// components/VerifyNotice.js
import { useSession } from "next-auth/react";
console.log("🔍 VerifyNotice loaded:", VerifyNotice);
export default function VerifyNotice() {
  const { data: session, status } = useSession();
  if (status === "loading" || session) return null;
  return (
    <div style={{ background: "#fffae6", padding: "1rem", textAlign: "center" }}>
      Por favor, <strong>entre com seu e-mail</strong> para comentar ou reagir.
    </div>
  );
}
