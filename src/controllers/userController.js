const userService = require("../services/userService");

const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const profile = await userService.getProfile(userId);

    res.json({
      success: true,
      message: "Profile retrieved successfully",
      user: profile,
    });
  } catch (error) {
    next(error);
  }
};

const createProfile = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const {
      name,
      phone,
      address,
      profileImage,
    } = req.body;

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
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
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
    next(error);
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
};