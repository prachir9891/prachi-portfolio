import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

export const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1. Save to Database
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // 2. Setup NodeMailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Send Email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Sending to yourself
      subject: `New Contact from Portfolio: ${name}`,
      text: `You received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Contact submitted and email sent successfully!' });
  } catch (error) {
    console.error('Contact Submission Error:', error);
    res.status(500).json({ message: 'Failed to submit contact', error: error.message });
  }
};
