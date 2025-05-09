import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const auth = { auth: {
  api_key: process.env.MAILGUN_API_KEY,
  domain:   process.env.MAILGUN_DOMAIN
}};
export const transporter = nodemailer.createTransport(mg(auth));

export async function sendVerificationRequest({ identifier: email, url, provider }) {
  const { from } = provider;
  await transporter.sendMail({
    from,
    to: email,
    subject: "Seu link de login",
    text: `Clique para entrar: ${url}`
  });
}
