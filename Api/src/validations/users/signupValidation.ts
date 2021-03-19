import { body } from "express-validator";
import { UserType } from "../../utilities/enums";

export const signupValidation = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 charachters"),
  body("userName")
    .isString()
    .isLength({ min: 3, max: 15 })
    .withMessage("Username must be a string between 3 and 15 characters"),
  body("userType")
    .custom((input) => Object.values(UserType).includes(input))
    .withMessage("You must be either a Designer or a Coder"),
  body("image")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("Image must be a string and can't be empty"),
];
