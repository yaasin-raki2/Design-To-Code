import express, { Request, Response } from "express";

import { Submition } from "../../models/submition";
import { validateRequest } from "../../middlewares/validate-request";
import { NotFoundError } from "../../errors/not-found-error";
import { showValidation } from "../../validations/general/showValidation";
import { Design } from "../../models/design";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import { requireAuth } from "../../middlewares/require-auth";
import { coderHasAccess } from "../../middlewares/coder-has-access";

const router = express.Router();

router.delete(
  "/api/submitions/:id",
  requireAuth,
  coderHasAccess,
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const submition = await Submition.findById(req.params.id);

    if (!submition) throw new NotFoundError();

    if (
      req.currentUser!.id !== submition.userId &&
      req.currentUser!.id !== process.env.ADMIN_ID
    ) {
      throw new NotAuthorizedError();
    }

    const design = await Design.findOne({ name: submition.designName });

    if (!design) throw new NotFoundError();

    const submitionIndex = design.submitions.submitionsArray.findIndex(
      (item) => item._id == submition._id
    );

    design.submitions.submitionsArray.splice(submitionIndex, 1);

    design.submitions.quantity--;

    await submition.deleteOne();

    await design.save();

    res.status(200).send(design);
  }
);

export { router as deleteSubmitionRouter };
