import express, { Request, Response } from "express";

import { NotFoundError } from "../../errors/not-found-error";
import { User } from "../../models/user";
import { requireAuth } from "../../middlewares/require-auth";
import { isAdmin } from "../../middlewares/is-admin";
import { showValidation } from "../../validations/general/showValidation";
import { validateRequest } from "../../middlewares/validate-request";

const router = express.Router();

router.patch(
  "/api/users/:id",
  requireAuth,
  isAdmin,
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new NotFoundError();
    }

    user.banned = !user.banned;

    await user.save();

    res.send(user);
  }
);

export { router as banUserRouter };
