import express, { Request, Response } from "express";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { updateDesignValidation } from "../../validations/updateDesignValidation";
import { NotFoundError } from "../../errors/not-found-error";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.patch(
  "/api/designs/:id",
  updateDesignValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      throw new BadRequestError("You must provide a field to update");
    }

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
