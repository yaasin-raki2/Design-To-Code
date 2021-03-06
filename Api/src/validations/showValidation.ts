import mongoose from "mongoose";
import { param } from "express-validator";

export const showValidation = [
  param("id")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid id"),
];
