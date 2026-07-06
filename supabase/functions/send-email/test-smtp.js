// test-smtp.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD }
});

async function run() {
  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: "SMTP Test",
      text: "Ini tes SMTP",
    });
    console.log("Sent:", info);
  } catch (err) {
    console.error("SMTP Error:", err);
  }
}

run();