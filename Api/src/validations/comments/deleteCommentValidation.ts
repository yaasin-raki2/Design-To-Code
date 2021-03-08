import mongoose from "mongoose";
import { body } from "express-validator";

import { Models } from "../../utilities/enums";

export const newCommentValidation = [
  body("userId")
    .notEmpty()
    .isString()
    .withMessage("userId must be valid and a non empty string"),
  body("model")
    .custom((input) => Object.values(Models).includes(input))
    .withMessage("You must choose from 4 difficulties: easy | medium | hard | extreme"),
  body("modelId")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid modelId"),
  body("commentId")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid commentId"),
  body("replyId")
    .optional()
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid replyId"),
];
