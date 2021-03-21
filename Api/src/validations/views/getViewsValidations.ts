import mongoose from "mongoose";
import { param, query } from "express-validator";

import { Models } from "../../utilities/enums";

export const getViewsValidations = [
  param("id")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage("You must provide a valid id"),
  query("model")
    .custom((input) => Object.values(Models).includes(input))
    .withMessage("You must choose from 2 Models: design | submition"),
];
