import express, { Request, Response } from "express";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { updateDesignValidation } from "../../validations/designs/updateDesignValidation";
import { NotFoundError } from "../../errors/not-found-error";
import { BadRequestError } from "../../errors/bad-request-error";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import { designerHasAccess } from "../../middlewares/designer-has-access";
import { requireAuth } from "../../middlewares/require-auth";

const router = express.Router();

router.patch(
  "/api/designs/:id",
  requireAuth,
  designerHasAccess,
  updateDesignValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      throw new BadRequestError("You must provide a field to update");
    }

    if (req.body.approved !== undefined && req.currentUser!.id !== process.env.ADMIN_ID) {
      throw new NotAuthorizedError();
    }

    const design = await Design.findById(req.params.id);

    if (!design) {
      throw new NotFoundError();
    }

    if (
      req.currentUser!.id !== design.userId &&
      req.currentUser!.id !== process.env.ADMIN_ID
    ) {
      throw new NotAuthorizedError();
    }

    design.set({ ...req.body });
    await design.save();

    res.status(200).send(design);
  }
);

export { router as updateDesignRouter };
