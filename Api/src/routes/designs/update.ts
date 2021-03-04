import express, { Request, Response } from "express";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { updateDesignValidation } from "../../validations/updateDesign";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.patch(
  "/api/designs/:id",
  updateDesignValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const design = await Design.findById(req.params.id);

    if (!design) {
      throw new NotFoundError();
    }

    design.set({ ...req.body });
    await design.save();

    res.status(200).send(design);
  }
);

export { router as updateDesignRouter };
