// pages/api/contact.js
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mg(auth));

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { name, email, message } = req.body;

  await transporter.sendMail({
    from: `${name} <${email}>`,
    to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    subject: `Contato de ${name}`,
    text: message,
  });

  res.status(200).json({ ok: true });
}
