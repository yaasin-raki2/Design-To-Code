import mongoose from "mongoose";
import { body } from "express-validator";

import { Models } from "../../utilities/enums";

export const indexCommentValidation = [
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
