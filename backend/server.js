require("dotenv").config();

const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");

const app = express();
const server = http.Server(app);
const PORT = process.env.PORT || 5000;

//
// -------------------- MIDDLEWARE --------------------
//

// Security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
  message: "Too many requests, please try again later."
});
app.use(limiter);

// CORS – only allow your frontend



app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// -------------------- STATIC FRONTEND --------------------
//

// Serve static frontend files
const frontendPath = path.join(__dirname, "..", "vr tech website", "dist");
app.use(express.static(frontendPath));

// Redirect all requests to index.html (important for React Router!)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

//
// -------------------- API ROUTES --------------------
//

// Email sending API
app.post("/api/send_mail", async (req, res) => {
  const { name, email, message, phone , subject } = req.body;

  // Basic validation
  if (!name || !email || !message || !subject || !phone) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  // Nodemailer setup
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject:subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`,
    
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

//
// -------------------- DEFAULT ROUTE FOR INVALID ENDPOINTS --------------------
//

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found." });
});

//
// -------------------- SERVER START --------------------
//

server.listen(PORT, () => {
  console.log(`🚀 Server running securely on port ${PORT}`);
});
