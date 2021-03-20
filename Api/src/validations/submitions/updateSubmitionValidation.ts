import { body } from "express-validator";

import { OSPlatforms } from "../../utilities/enums";

export const updateSubmitionValidation = [
  body("sourceCode")
    .optional()
    .isObject()
    .notEmpty()
    .withMessage("Source Code must have a link and an OSPlatform"),
  body("sourceCode.link")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("Source Code's link must be a string or a url"),
  body("sourceCode.platform")
    .optional()
    .custom((input) => Object.values(OSPlatforms).includes(input))
    .withMessage("You must choose from 3 platforms: github | gitlab | bitbucket"),
  body("image")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("Image must be a string and can't be empty"),
];
