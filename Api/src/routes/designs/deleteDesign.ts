import express, { Request, Response } from "express";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { showValidation } from "../../validations/general/showValidation";
import { designerHasAccess } from "../../middlewares/designer-has-access";
import { requireAuth } from "../../middlewares/require-auth";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.delete(
  "/api/designs/:id",
  requireAuth,
  designerHasAccess,
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
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

    await design.delete();

    res.status(200).send({});
  }
);

export { router as deleteDesignRouter };
