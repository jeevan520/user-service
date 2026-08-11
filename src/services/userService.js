const userRepository = require("../repositories/userRepository");

const getProfile = async (userId) => {
  const profile = await userRepository.findProfileByUserId(userId);

  if (!profile) {
    throw new Error("Profile not found");
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
  const existingProfile = await userRepository.findProfileByUserId(userId);

  if (existingProfile) {
    throw new Error("Profile already exists");
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
  const existingProfile = await userRepository.findProfileByUserId(userId);

  if (!existingProfile) {
    throw new Error("Profile not found");
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