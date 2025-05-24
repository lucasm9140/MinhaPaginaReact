// pages/api/reactions.js
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import clientPromise from "../../lib/db/mongodb";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ error: "Login required" });

  const db = (await clientPromise).db();
  if (req.method === "POST") {
    const { itemId, reaction } = req.body;
    await db.collection("reactions").updateOne(
      { userId: session.user.id, itemId },
      { $set: { reaction, updatedAt: new Date() } },
      { upsert: true }
    );
    return res.status(200).json({ ok: true });
  }
  res.status(405).end();
}