const userRepository = require("../repositories/userRepository");

const createError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const getProfile = async (userId) => {
  const profile = await userRepository.findProfileByUserId(userId);

  if (!profile) {
    throw createError("Profile not found", 404);
  }

  return profile;
};

const createProfile = async ({
  userId,
  name,
  phone,
  address,
  profileImage,
}) => {
  const existingProfile =
    await userRepository.findProfileByUserId(userId);

  if (existingProfile) {
    throw createError("Profile already exists", 409);
  }

  return userRepository.createProfile({
    userId,
    name,
    phone,
    address,
    profileImage,
  });
};

const updateProfile = async ({
  userId,
  name,
  phone,
  address,
  profileImage,
}) => {
  const existingProfile =
    await userRepository.findProfileByUserId(userId);

  if (!existingProfile) {
    throw createError("Profile not found", 404);
  }

  return userRepository.updateProfile({
    userId,
    name,
    phone,
    address,
    profileImage,
  });
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
};