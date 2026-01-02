import nodemailer from 'nodemailer';

// Configure the SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // e.g., 'smtp.gmail.com' for Gmail
  port: 587, // or 465 for secure (TLS but for now we should use 587 for SSL, this will be upgrade to TLS later)
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL, // your SMTP username
    pass: process.env.EMAIL_PASS,    // your SMTP password
  },tls: {
    rejectUnauthorized: false 
  },
  family: 4,
});

// Function to send email
async function sendEmail(to, subject, text, html) {
  try {
   
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
