import { body } from "express-validator";

export const signinValidation = [
  body("email").isEmail().withMessage("Email must e valid"),
  body("password").trim().notEmpty().withMessage("You must supply a password"),
];
