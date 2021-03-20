import express, { Request, Response } from "express";

import { requireAuth } from "../../middlewares/require-auth";
import { FollowUnfollow } from "../../utilities/followers/FollowUnfollow";
import { showValidation } from "../../validations/general/showValidation";
import { NotAuthorizedError } from "../../errors/not-authorized-error";

const router = express.Router();

router.post(
  "/api/followers/:id",
  requireAuth,
  showValidation,
  async (req: Request, res: Response) => {
    const userId = req.currentUser!.id;
    const userToFollowId = req.params.id;

    if (userId === userToFollowId) {
      throw new NotAuthorizedError();
    }

    const { user, userToFollow } = await FollowUnfollow(userId, userToFollowId);

    res.send({ user, userToFollow });
  }
);

export { router as followUnfollowRouter };
