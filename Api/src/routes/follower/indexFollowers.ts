import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";

import { User } from "../../models/user";
import { showValidation } from "../../validations/general/showValidation";

const router = express.Router();

router.get(
  "/api/follower/followers/:id",
  requireAuth,
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const userwithFollowersData = await User.findById(req.params.id).populate(
      "followers.followersArray"
    );

    if (!userwithFollowersData) {
      throw new NotFoundError();
    }

    const followers = userwithFollowersData.followers?.followersArray;

    res.send(followers);
  }
);

export { router as indexFollowersRouter };
