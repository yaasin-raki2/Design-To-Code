import mongoose from "mongoose";
import { body } from "express-validator";

import { Models } from "../../utilities/enums";

export const indexLikeOwnersValidation = [
  body("model")
    .custom((input) => Object.values(Models).includes(input))
    .withMessage("You must choose from 2 Models: design | submition"),
  body("modelId")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid modelId"),
  body("commentId")
    .optional()
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid commentId"),
  body("replyId")
    .optional()
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid replyId"),
];
