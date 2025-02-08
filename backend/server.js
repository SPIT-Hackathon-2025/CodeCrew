import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import webhookRoutes from './routes/webhookRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import assetRoutes from './routes/assetRoutes.js'; 

dotenv.config();

connectDB();

const app = express();
app.use(cors());

// Routes
app.use('/api', webhookRoutes);
app.use('/api', assetRoutes);

// Error Handling Middleware
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
