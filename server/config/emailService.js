import nodemailer from 'nodemailer';

const smtpHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.EMAIL_PORT || 587);
const smtpSecure = typeof process.env.EMAIL_SECURE === 'string'
  ? process.env.EMAIL_SECURE === 'true'
  : smtpPort === 465;

// Configure the SMTP transporter
const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure, // 465=true, 587=false (STARTTLS)
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  // avoid hanging forever on cloud hosts
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 20_000,
  ...(smtpSecure
    ? {}
    : {
        requireTLS: true,
      }),
});

// Function to send email
async function sendEmail(to, subject, text, html) {
  try {
    if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
      return { success: false, error: 'Missing EMAIL/EMAIL_PASS env vars' };
    }
   
    const info = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

export {sendEmail};