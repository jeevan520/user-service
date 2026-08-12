const { body } = require("express-validator");

const profileValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("phone")
    .optional({ values: "falsy" })
    .trim()
    .matches(/^[0-9]{10}$/)
    .withMessage("Phone must be exactly 10 digits"),

  body("address")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 255 })
    .withMessage("Address must not exceed 255 characters"),

  body("profileImage")
    .optional({ values: "falsy" })
    .isString()
    .withMessage("Profile image must be a string"),
];

module.exports = {
  profileValidation,
};