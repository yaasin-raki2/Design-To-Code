import mongoose from "mongoose";
import { body } from "express-validator";

export const NewPaymentValidation = [
  body("purchaseId")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid purchaseId"),
  body("token").notEmpty(),
];
