import express, { Request, Response } from "express";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { newDesignValidation } from "../../validations/designs/newDesignValidation";
import { designerHasAccess } from "../../middlewares/designer-has-access";
import { isAdmin } from "../../middlewares/is-admin";
import { requireAuth } from "../../middlewares/require-auth";

const router = express.Router();

router.post(
  "/api/designs",
  requireAuth,
  designerHasAccess,
  newDesignValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = req.body;

    const design = Design.build({
      colorPalette: data.colorPalette,
      difficulty: data.difficulty,
      file: {
        link: data.file.link,
        typeOfFile: data.file.typeOfFile,
      },
      image: data.image,
      name: data.name,
    });
    await design.save();

    res.status(201).send(design);
  }
);

export { router as newDesignRouter };
