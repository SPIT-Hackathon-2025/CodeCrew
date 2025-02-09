// userController.js
import User from '../../../backend/models/userModel.js';

export const updateSkinAvailability = async (req, res) => {
  try {
    const { clerkUserId } = req.params;
    const { skinName } = req.body;

    if (!clerkUserId || !skinName) {
      return res.status(400).json({
        success: false,
        message: 'ClerkUserId and skinName are required'
      });
    }

    const user = await User.findOne({ clerkUserId });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if skin already exists to avoid duplicates
    if (!user.unlockedSkins.includes(skinName)) {
      user.unlockedSkins.push(skinName);
      await user.save();
    }

    return res.status(200).json({
      success: true,
      message: 'Skin added successfully',
      unlockedSkins: user.unlockedSkins
    });
  } catch (error) {
    console.error('Error in updateSkinAvailability:', error);
    return res.status(500).json({
      success: false,
      message: 'Error updating skin availability',
      error: error.message
    });
  }
};

// Game1.jsx
import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from '../components/ui/button';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';

function Game1() {
  const [hitCount, setHitCount] = useState(0);
  const [skinUnlocked, setSkinUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [user] = useState({ clerkUserId: '12345' });
  const skinName = 'Elite Sniper';

  const addSkinToUserDatabase = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.put(
        `/api/user/${user.clerkUserId}/skins`,
        {
          skinName,
          clerkUserId: user.clerkUserId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        toast({
          title: "Skin Unlocked!",
          description: `Successfully unlocked ${skinName}`,
          variant: "success",
        });
      }
    } catch (err) {
      console.error('Error adding skin to user:', err);
      setError(err.message);
      toast({
        title: "Error",
        description: "Failed to save your unlocked skin. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hitCount >= 10 && !skinUnlocked) {
      setSkinUnlocked(true);
    }
  }, [hitCount, skinUnlocked]);

  useEffect(() => {
    if (skinUnlocked) {
      addSkinToUserDatabase();
    }
  }, [skinUnlocked]);

  const handleHit = () => {
    setHitCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900">
      {skinUnlocked && <ReactConfetti />}
      <div className="bg-gray-800 text-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
        <h1 className="text-3xl font-semibold mb-4">Hit the Button to Unlock Skin!</h1>
        <Button
          className="w-full py-3 bg-purple-600 text-xl rounded-md hover:bg-purple-500 focus:outline-none transition"
          onClick={handleHit}
          disabled={loading}
        >
          Hit!
        </Button>
        <div className="mt-4 text-xl text-gray-300">Hits: {hitCount}</div>

        {skinUnlocked && (
          <div className="mt-4 text-xl text-red-500">
            <p>
              Congratulations! You unlocked the <strong className="text-yellow-400">"Elite Sniper"</strong> skin!
            </p>
            {loading && <p className="text-sm text-gray-300">Saving your progress...</p>}
            {error && <p className="text-sm text-red-400">Error: {error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game1;