import nodemailer from "nodemailer"
import { config } from "../helpers/config";
import { logger } from "../helpers/logger";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  // Configure your email service provider here
  host: config.host,
  port: config.port,
  auth: {
    user: config.user,
    pass: config.pass,
  },
});


// Function to send activation email
export async function sendActivationEmail(email: string, token: string) {
    const activationLink = `http://localhost:5000/activate/${token}`; // Replace with your activation endpoint URL
  
    const mailOptions = {
      from: 'noreply@casparwallet.com',
      to: email,
      subject: 'Account Activation',
      text: `Please click on the following link to activate your account: ${activationLink}`,
      html: `<p>Please click on the following link to activate your account: <a href="${activationLink}">Activate Now</a></p>`,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      logger.info('Activation email sent');
    } catch (error) {
      console.error('Error sending activation email:', error);
    }
  }