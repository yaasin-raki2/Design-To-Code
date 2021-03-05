import express, { Request, Response } from "express";
import { param } from "express-validator";
import mongoose from "mongoose";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get(
  "/api/designs/:id",
  [
    param("id")
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("You must provide a valid id"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const design = await Design.findById(req.params.id);

    if (!design) {
      throw new NotFoundError();
    }

    res.status(200).send(design);
  }
);

export { router as showDesignRouter };
