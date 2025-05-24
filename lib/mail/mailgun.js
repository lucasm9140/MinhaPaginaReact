// lib/mail/mailgun.js
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

// Use MAILGUN_API_KEY and MAILGUN_DOMAIN, with fallbacks to SMTP vars if needed
const apiKey = process.env.MAILGUN_API_KEY || process.env.MAILGUN_SMTP_PASSWORD;
const domain = process.env.MAILGUN_DOMAIN || process.env.MAILGUN_SMTP_USER?.split("@")[1];

if (!apiKey || !domain) {
  throw new Error(
    "Please define both MAILGUN_API_KEY and MAILGUN_DOMAIN in your environment variables"
  );
}

const auth = { auth: { api_key: apiKey, domain } };
export const transporter = nodemailer.createTransport(mg(auth));

/**
 * Send a magic link email for NextAuth verification
 */
export async function sendVerificationRequest({ identifier: email, url, provider }) {
  const { host } = new URL(url);
  await transporter.sendMail({
    from: provider.from,
    to: email,
    subject: `Sign in to ${host}`,
    text: `Use this link to sign in: ${url}`,
  });
}
