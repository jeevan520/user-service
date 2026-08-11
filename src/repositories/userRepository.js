const pool = require("../config/database");

const findProfileByUserId = async (userId) => {
  const result = await pool.query(
    `
    SELECT
      user_id,
      name,
      phone,
      address,
      profile_image,
      created_at,
      updated_at
    FROM profiles
    WHERE user_id = $1
    `,
    [userId]
  );

  return result.rows[0] || null;
};

const createProfile = async ({
  userId,
  name,
  phone,
  address,
  profileImage,
}) => {
  const result = await pool.query(
    `
    INSERT INTO profiles (
      user_id,
      name,
      phone,
      address,
      profile_image
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING
      user_id,
      name,
      phone,
      address,
      profile_image,
      created_at,
      updated_at
    `,
    [userId, name, phone, address, profileImage]
  );

  return result.rows[0];
};

const updateProfile = async ({
  userId,
  name,
  phone,
  address,
  profileImage,
}) => {
  const result = await pool.query(
    `
    UPDATE profiles
    SET
      name = $2,
      phone = $3,
      address = $4,
      profile_image = $5,
      updated_at = CURRENT_TIMESTAMP
    WHERE user_id = $1
    RETURNING
      user_id,
      name,
      phone,
      address,
      profile_image,
      created_at,
      updated_at
    `,
    [userId, name, phone, address, profileImage]
  );

  return result.rows[0] || null;
};

module.exports = {
  findProfileByUserId,
  createProfile,
  updateProfile,
};