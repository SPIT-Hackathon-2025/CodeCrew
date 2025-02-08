import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, unique: true, required: true },
    firstName: String,
    lastName: String,
    userName: String,
    wallets: {
      ethereum: {
        address: { type: String, sparse: true },
        balance: { type: String, default: '0' },
        lastUpdated: Date
      },
      sepolia: {
        address: { type: String, sparse: true },
        balance: { type: String, default: '0' },
        lastUpdated: Date
      }
    },
    gameProfile: {
      level: { type: Number, default: 1 },
      xp: { type: Number, default: 0 },
      lastPlayed: Date
    }
  },
  { 
    timestamps: true,
    toJSON: { getters: true }
  }
);

// Index for wallet queries
userSchema.index({ 'wallets.ethereum.address': 1 });
userSchema.index({ 'wallets.sepolia.address': 1 });

const User = mongoose.model('User', userSchema);

export default User;