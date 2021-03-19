import express, { Request, Response } from "express";

import { NotFoundError } from "../../errors/not-found-error";
import { User } from "../../models/user";
import { requireAuth } from "../../middlewares/require-auth";
import { updateUserValidation } from "../../validations/users/updateUserValidation";
import { validateRequest } from "../../middlewares/validate-request";
import { NotAuthorizedError } from "../../errors/not-authorized-error";

const router = express.Router();

router.put(
  "/api/users/:id",
  requireAuth,
  updateUserValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password, banned, userType } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      throw new NotFoundError();
    }

    if ((email || password || banned || userType) !== undefined) {
      throw new NotAuthorizedError();
    }

    if (req.currentUser!.id !== user.id && req.currentUser!.id !== process.env.ADMIN_ID) {
      throw new NotAuthorizedError();
    }

    user.set({ ...req.body });

    await user.save();

    res.send(user);
  }
);

export { router as updateUserRouter };
