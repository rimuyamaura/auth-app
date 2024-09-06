import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port:', PORT);
});
