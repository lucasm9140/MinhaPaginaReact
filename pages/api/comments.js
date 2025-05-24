// pages/api/comments.js
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import clientPromise from "../../lib/db/mongodb";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ error: "Login required" });

  const db = (await clientPromise).db();
  if (req.method === "POST") {
    const { text } = req.body;
    await db.collection("comments").insertOne({
      userId: session.user.id,
      email: session.user.email,
      text,
      createdAt: new Date(),
    });
    return res.status(201).json({ ok: true });
  }

  // GET: retorna todos os comentários
  const comments = await db.collection("comments").find().toArray();
  res.status(200).json(comments);
}