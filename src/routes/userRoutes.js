const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const validationMiddleware = require("../middleware/validationMiddleware");

const {
  profileValidation,
} = require("../validators/profileValidator");

const {
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/userController");

const router = express.Router();

// Get profile
router.get(
  "/me",
  authMiddleware,
  getProfile
);

// Create profile
router.post(
  "/profile",
  authMiddleware,
  profileValidation,
  validationMiddleware,
  createProfile
);

// Update profile
router.put(
  "/me",
  authMiddleware,
  profileValidation,
  validationMiddleware,
  updateProfile
);

module.exports = router;