import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Portfolio from '../models/Portfolio.js';

dotenv.config();

const migrate = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    const dataPath = path.join(process.cwd(), 'extracted.json');
    const servicesData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      console.log('No portfolio found');
      process.exit(1);
    }

    portfolio.services = servicesData;
    await portfolio.save();

    console.log('Services updated successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1);
  }
};

migrate();
