import { body } from "express-validator";

import { DifficultyLevels, FileTypes } from "../utilities/enums";

export const newDesignValidation = [
  body("colorPalette")
    .isArray({ min: 2, max: 10 })
    .withMessage("Color palette must have at least 2 colors and a max of 10 colors"),
  body("difficulty")
    .custom((input) => Object.values(DifficultyLevels).includes(input))
    .withMessage("You must choose from 4 difficulties: easy | medium | hard | extreme"),
  body("file")
    .isObject()
    .notEmpty()
    .withMessage("A File must have a link and a type-of-file"),
  body("file.link")
    .notEmpty()
    .isString()
    .withMessage("file's link must be a string or a url"),
  body("file.typeOfFile")
    .custom((input) => Object.values(FileTypes).includes(input))
    .withMessage("You must choose from 4 file: figma | adobexd | sketch | photoshop"),
  body("image")
    .notEmpty()
    .isString()
    .withMessage("Image must be a string and can't be empty"),
];
