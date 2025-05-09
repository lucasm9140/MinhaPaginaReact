import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth].js";
import clientPromise from "../../lib/db/mongodb";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ error: "Login required" });

  if (req.method === "POST") {
    const { itemId, reaction } = req.body;
    const db = (await clientPromise).db();
    await db.collection("reactions").updateOne(
      { userId: session.user.id, itemId },
      { $set: { reaction, updatedAt: new Date() } },
      { upsert: true }
    );
    return res.status(200).json({ ok: true });
  }
  res.status(405).end();
}