import { body, param } from "express-validator";

import { OSPlatforms } from "../../utilities/enums";

export const newSubmitionValidation = [
  body("designName")
    .isString()
    .isLength({ min: 3, max: 15 })
    .withMessage("Design's name must be a string between 3 and 15 characters"),
  body("sourceCode")
    .isObject()
    .notEmpty()
    .withMessage("Source Code must have a link and an OSPlatform"),
  body("sourceCode.link")
    .notEmpty()
    .isString()
    .withMessage("Source Code's link must be a string or a url"),
  body("sourceCode.platform")
    .custom((input) => Object.values(OSPlatforms).includes(input))
    .withMessage("You must choose from 3 platforms: github | gitlab | bitbucket"),
  body("image")
    .notEmpty()
    .isString()
    .withMessage("Image must be a string and can't be empty"),
];
