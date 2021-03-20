import express, { Request, Response } from "express";

import { NotFoundError } from "../../errors/not-found-error";
import { User } from "../../models/user";
import { requireAuth } from "../../middlewares/require-auth";
import { updateUserValidation } from "../../validations/users/updateUserValidation";
import { validateRequest } from "../../middlewares/validate-request";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.put(
  "/api/users/:id",
  requireAuth,
  updateUserValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const { userName, image } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      throw new NotFoundError();
    }

    if (userName !== undefined) {
      user.userName = userName;
    }

    if (image !== undefined) {
      user.image = image;
    }

    if (userName === undefined && image === undefined) {
      throw new BadRequestError("You must provide a field to update");
    }

    if (req.currentUser!.id !== user.id && req.currentUser!.id !== process.env.ADMIN_ID) {
      throw new NotAuthorizedError();
    }

    await user.save();

    res.send(user);
  }
);

export { router as updateUserRouter };
