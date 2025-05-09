import { getServerSession } from "next-auth/react";
import clientPromise from "../../lib/db/mongodb";
import { authOptions } from "./auth/[...nextauth]";

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
  // GET
  const comments = await db.collection("comments").find().toArray();
  res.status(200).json(comments);
}
