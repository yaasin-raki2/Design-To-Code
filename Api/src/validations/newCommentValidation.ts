import mongoose from "mongoose";
import { body } from "express-validator";

import { Models } from "../utilities/enums";

export const newCommentValidation = [
  body("userId")
    .notEmpty()
    .isString()
    .withMessage("userId must be valid and a non empty string"),
  body("comment")
    .optional()
    .isString()
    .isLength({ min: 3, max: 500 })
    .withMessage("Comment must be a string between 3 and 500 characters"),
  body("reply")
    .optional()
    .isString()
    .isLength({ min: 3, max: 500 })
    .withMessage("Reply must be a string between 3 and 500 characters"),
  body("model")
    .custom((input) => Object.values(Models).includes(input))
    .withMessage("You must choose from 4 difficulties: easy | medium | hard | extreme"),
  body("modelId")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid modelId"),
  body("commentId")
    .optional()
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid commentId"),
];