import express, { Request, Response } from "express";

import { Submition } from "../../models/submition";
import { validateRequest } from "../../middlewares/validate-request";
import { updateSubmitionValidation } from "../../validations/submitions/updateSubmitionValidation";
import { BadRequestError } from "../../errors/bad-request-error";
import { NotFoundError } from "../../errors/not-found-error";
import { coderHasAccess } from "../../middlewares/coder-has-access";
import { requireAuth } from "../../middlewares/require-auth";
import { NotAuthorizedError } from "../../errors/not-authorized-error";

const router = express.Router();

router.patch(
  "/api/submitions/:id",
  requireAuth,
  coderHasAccess,
  updateSubmitionValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      throw new BadRequestError("You must provide a field to update");
    }

    if (req.body.designName !== undefined) {
      throw new NotAuthorizedError();
    }

    const submition = await Submition.findById(req.params.id);

    if (!submition) {
      throw new NotFoundError();
    }

    if (
      req.currentUser!.id !== submition.userId &&
      req.currentUser!.id !== process.env.ADMIN_ID
    ) {
      throw new NotAuthorizedError();
    }

    submition.set({ ...req.body });
    await submition.save();

    res.status(200).send(submition);
  }
);

export { router as updateSubmitionRouter };
