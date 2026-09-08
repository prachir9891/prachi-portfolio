require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./src/models/Admin');
const connectDB = require('./src/config/db');

const seedAdmin = async () => {
  try {
    await connectDB();
    
    // Check if admin already exists
    const adminExists = await Admin.findOne({ email: 'admin@example.com' });
    if (adminExists) {
      console.log('Admin already exists');
      process.exit();
    }

    const admin = new Admin({
      email: 'admin@example.com',
      password: 'admin',
    });

    await admin.save();
    console.log('Admin seeded successfully: email: admin@example.com | password: admin');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();
