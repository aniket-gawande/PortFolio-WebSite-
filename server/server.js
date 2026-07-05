const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for the React development server
app.use(cors({
  origin: 'http://localhost:5173', // React port
  methods: ['GET', 'POST'],
  credentials: true
}));

// Body parser middleware
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Aniket Portfolio Backend Server is running successfully.');
});

// Contact form API route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide name, email, and message.' 
    });
  }

  // Create transporter using environment variables
  // Gmail SMTP settings are configured by default.
  // Note: For Gmail, you MUST create an "App Password" in Google Account settings.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Mail options setup
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'aniketgawande2509@gmail.com',
    replyTo: email,
    subject: `Portfolio Contact Form: Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 600px;">
        <h2 style="color: #6b21a8; border-bottom: 2px solid #6b21a8; padding-bottom: 8px;">New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #6b21a8; margin-top: 15px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
        </div>
      </div>
    `
  };

  try {
    // Attempt sending email
    await transporter.sendMail(mailOptions);
    console.log(`[Email Sent] Message from ${name} (${email}) forwarded successfully.`);
    return res.status(200).json({ 
      success: true, 
      message: 'Your message was sent successfully!' 
    });
  } catch (error) {
    console.error('[SMTP Transporter Error]', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to transmit message via email. Check server credentials.' 
    });
  }
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running in development mode on port ${PORT}`);
  console.log(`Email destination set to: aniketgawande2509@gmail.com`);
});
