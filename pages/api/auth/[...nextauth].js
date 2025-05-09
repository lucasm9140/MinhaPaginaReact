import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/db/mongodb";
import { sendVerificationRequest } from "../../../lib/mail/mailgun";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      sendVerificationRequest,
      maxAge: 24 * 60 * 60, // 24h
    }),
  ],
  pages: { verifyRequest: "/verify" },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
};

export default NextAuth(authOptions);