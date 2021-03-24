import express, { Request, Response } from "express";

import { requireAuth } from "../../middlewares/require-auth";
import { FollowUnfollow } from "../../utilities/followers/FollowUnfollow";
import { showValidation } from "../../validations/general/showValidation";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import { validateRequest } from "../../middlewares/validate-request";
import { sendNotification } from "../../utilities/notifications/SendNotification";

const router = express.Router();

router.post(
  "/api/follower/:id",
  requireAuth,
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const userId = req.currentUser!.id;
    const userToFollowId = req.params.id;

    if (userId === userToFollowId) {
      throw new NotAuthorizedError();
    }

    const { user, userToFollow, button } = await FollowUnfollow(userId, userToFollowId);

    let message = "";

    if (button === "follow") {
      message = `${user.userName} is now following you, follow him back!`;
    } else if (button === "unfollow") {
      message = `${user.userName} unfollowed you`;
    }

    await sendNotification({
      message: message,
      image: user.image || "Default Image",
      link: `/api/users/${user.id}`,
      userId: userToFollow.id,
    });

    res.send({ user, userToFollow });
  }
);

export { router as followUnfollowRouter };
