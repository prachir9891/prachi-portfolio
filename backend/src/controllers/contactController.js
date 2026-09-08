const ContactMessage = require('../models/ContactMessage');
const nodemailer = require('nodemailer');

// POST /api/contact
const createContactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1. Save to MongoDB
    const contactMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
    });
    
    await contactMessage.save();

    // 2. Send Email Notification
    let transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Request: ${subject}`,
      text: `You have received a new contact message from your portfolio.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Message sent and saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
};

module.exports = {
  createContactMessage,
};
