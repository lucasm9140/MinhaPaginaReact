import clientPromise from "../../lib/db/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { email } = req.body;
  const db = (await clientPromise).db();
  await db.collection("newsletter").updateOne(
    { email },
    { $set: { email, subscribedAt: new Date() } },
    { upsert: true }
  );
  res.status(201).json({ ok: true });
}
