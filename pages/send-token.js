import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  // Generate 6-digit token
  const token = Math.floor(100000 + Math.random() * 900000).toString();

  // Store token temporarily in memory (replace with DB later if needed)
  global.tokenStore = global.tokenStore || {};
  global.tokenStore[email] = token;

  // Configure SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Texas AGI Labs Careers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Texas AGI Labs Verification Code",
      html: `<p>Hello,</p><p>Your verification code is <b>${token}</b>.</p><p>This code will expire soon.</p>`,
    });

    res.status(200).json({ success: true, message: "Verification code sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
}

