# Prachi's Personal Portfolio

A modern, fully responsive personal portfolio website built with a full-stack architecture. 

It features a stunning user interface created with React and Vite, backed by an Express/Node.js server that handles form submissions by saving them to a MongoDB database and sending email notifications via Nodemailer.

## ✨ Features
- **Modern UI/UX**: Premium design aesthetics with smooth animations and glassmorphism effects.
- **Fully Responsive**: Optimized for desktops, tablets, and mobile devices with a custom hamburger menu.
- **Working Contact Form**: Submissions are saved securely to a MongoDB database.
- **Email Notifications**: Real-time email alerts sent straight to your inbox via Nodemailer when someone contacts you.
- **Render Ready**: Configured for seamless 1-click deployment on Render.com.

## 🛠️ Tech Stack
**Frontend:**
- React (with Vite)
- Vanilla CSS (Custom Design System)
- React Router DOM
- Lucide React & React Icons

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- Nodemailer (for emails)
- Dotenv (for environment variables)

## 🚀 Local Development Setup

1. **Clone the repository** (if not already done)
2. **Install all dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   ```
3. **Set up Environment Variables**
   Navigate to the `server/` directory and create a `.env` file (or update the existing one) with the following keys:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_google_app_password
   ```
4. **Run the Application**
   You need to run both the frontend and backend servers simultaneously for local testing.
   
   *Terminal 1 (Frontend):*
   ```bash
   # In the root directory
   npm run dev
   ```
   
   *Terminal 2 (Backend):*
   ```bash
   # In the server directory
   cd server
   npm run dev
   ```

## ☁️ Deployment (Render)
This project is configured to be deployed as a single Web Service on Render.

- **Build Command**: `npm run render-build`
- **Start Command**: `npm start`
- **Environment Variables required on Render**: `NODE_ENV=production`, `MONGO_URI`, `EMAIL_USER`, `EMAIL_PASS`
