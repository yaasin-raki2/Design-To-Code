import mongoose from "mongoose";
import { param, body } from "express-validator";

export const updateUserValidation = [
  param("id")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid id"),
  body("image")
    .optional()
    .isString()
    .withMessage("Image field must be a string of chrachters"),
  body("userName")
    .optional()
    .isString()
    .isLength({ min: 3, max: 15 })
    .withMessage("UserName must be a string between 3 and 15 characters"),
];
