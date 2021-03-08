import { body } from "express-validator";

import { DifficultyLevels, FileTypes } from "../../utilities/enums";

export const updateDesignValidation = [
  body("name")
    .optional()
    .isString()
    .isLength({ min: 3, max: 15 })
    .withMessage("Design's name must be a string between 3 and 15 characters"),
  body("colorPalette")
    .optional()
    .isArray({ min: 2, max: 10 })
    .withMessage("Color palette must have at least 2 colors and a max of 10 colors"),
  body("difficulty")
    .optional()
    .custom((input) => Object.values(DifficultyLevels).includes(input))
    .withMessage("You must choose from 4 difficulties: easy | medium | hard | extreme"),
  body("file")
    .optional()
    .isObject()
    .notEmpty()
    .withMessage("A File must have a link and a type-of-file"),
  body("file.link")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("file's link must be a string or a url"),
  body("file.typeOfFile")
    .optional()
    .custom((input) => Object.values(FileTypes).includes(input))
    .withMessage("You must choose from 4 file: figma | adobexd | sketch | photoshop"),
  body("image")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("Image must be a string and can't be empty"),
];
