import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";

import { User } from "../../models/user";
import { showValidation } from "../../validations/general/showValidation";

const router = express.Router();

router.get(
  "/api/follower/following/:id",
  requireAuth,
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const userwithFollowingData = await User.findById(req.params.id).populate(
      "following.followingArray"
    );

    if (!userwithFollowingData) {
      throw new NotFoundError();
    }

    const following = userwithFollowingData.following?.followingArray;

    res.send(following);
  }
);

export { router as indexFollowingRouter };
