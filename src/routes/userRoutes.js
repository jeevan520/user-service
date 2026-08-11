const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/userController");

const router = express.Router();

// Get logged-in user's profile
router.get("/me", authMiddleware, getProfile);

// Create logged-in user's profile
router.post("/profile", authMiddleware, createProfile);

// Update logged-in user's profile
router.put("/me", authMiddleware, updateProfile);

module.exports = router;