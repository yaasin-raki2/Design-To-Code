import express, { Request, Response } from "express";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { newDesignValidation } from "../../validations/designs/newDesignValidation";
import { designerHasAccess } from "../../middlewares/designer-has-access";
import { requireAuth } from "../../middlewares/require-auth";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.post(
  "/api/designs",
  requireAuth,
  designerHasAccess,
  newDesignValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = req.body;

    const exists = await Design.findOne({ name: data.name });

    if (exists) {
      throw new BadRequestError("Design's name already in use");
    }

    const design = Design.build({
      userId: req.currentUser!.id,
      colorPalette: data.colorPalette,
      difficulty: data.difficulty,
      file: {
        link: data.file.link,
        typeOfFile: data.file.typeOfFile,
      },
      image: data.image,
      name: data.name,
    });

    if (data.price > 0) {
      design.price = data.price;
      design.paid = true;
    }

    await design.save();

    res.status(201).send(design);
  }
);

export { router as newDesignRouter };
