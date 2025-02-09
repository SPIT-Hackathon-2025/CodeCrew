import express from 'express';
import {
  getUserByClerkId,
  updateXP,
  updateSkinAvailability,
  addGameToPlayed,
  updateSepoliaBalance,
} from '../controllers/userController.js';

const router = express.Router();

// Route to get user by Clerk User ID
router.get('/user/:clerkUserId', getUserByClerkId);

// Route to update user's XP
router.put('/user/:clerkUserId/xp', updateXP);

// Route to update skin availability for a user
router.put('/user/:clerkUserId/skins', updateSkinAvailability);

// Route to add a game to the user's played games
router.put('/user/:clerkUserId/games', addGameToPlayed);

// Route to update Sepolia balance for a user
router.put('/user/:clerkUserId/sepolia', updateSepoliaBalance);

export default router;
