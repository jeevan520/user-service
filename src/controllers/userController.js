const userService = require("../services/userService");

const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const profile = await userService.getProfile(userId);

    res.json({
      success: true,
      message: "Profile retrieved successfully",
      user: profile,
    });
  } catch (error) {
    console.error("Get profile error:", error.message);

    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const createProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const {
      name,
      phone,
      address,
      profileImage,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const profile = await userService.createProfile({
      userId,
      name,
      phone,
      address,
      profileImage,
    });

    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      user: profile,
    });
  } catch (error) {
    console.error("Create profile error:", error.message);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
    try {
    const userId = req.user.userId;

    const {
      name,
      phone,
      address,
      profileImage,
    } = req.body;

    const profile = await userService.updateProfile({
      userId,
      name,
      phone,
      address,
      profileImage,
    });

    res.json({
      success: true,
      message: "Profile updated successfully",
      user: profile,
    });
  } catch (error) {
    console.error("Update profile error:", error.message);

    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
};