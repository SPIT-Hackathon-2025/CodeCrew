import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import webhookRoutes from './routes/webhookRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import assetRoutes from './routes/assetRoutes.js'; 
import userRoutes from './routes/userRoutes.js'; 

dotenv.config();

connectDB();

const app = express();
app.use(cors());


const NFTs = [
  { id: 1, name: "Epic Sword", image: "/assets/sword.png", price: "0.1 ETH" },
  { id: 2, name: "Mystic Shield", image: "/assets/shield.png", price: "0.15 ETH" }
];

app.get("/nfts", (req, res) => {
  res.json({ success: true, data: NFTs });
});
app.use('/api', webhookRoutes);
app.use('/api', assetRoutes);
app.use('/api', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
