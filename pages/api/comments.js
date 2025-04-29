import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const transporter = nodemailer.createTransport(
  mg({ auth: { api_key: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN } })
);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { email, comment } = req.body;
  // opcional: salvar no MongoDB
  await transporter.sendMail({
    from: email,
    to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    subject: "Novo comentário",
    text: comment,
  });
  res.status(200).json({ ok: true });
}
