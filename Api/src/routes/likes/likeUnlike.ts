import express, { Request, Response } from "express";

import { likeUnlikeValidation } from "../../validations/likes/likeUnlikeValidation";
import { LikeUnlikeComment } from "../../utilities/likes/LikeUnlikeComment";
import { LikeUnlikeModel } from "../../utilities/likes/LikeUnlikeModel";
import { LikeUnlikeReply } from "../../utilities/likes/LikeUnlikeReply";
import { validateRequest } from "../../middlewares/validate-request";
import { NotFoundError } from "../../errors/not-found-error";
import { requireAuth } from "../../middlewares/require-auth";

const router = express.Router();

router.post(
  "/api/likes",
  requireAuth,
  likeUnlikeValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = { ...req.body, userId: req.currentUser!.id };

    let response: {} | undefined;

    if (!data.commentId && !data.replyId) {
      response = await LikeUnlikeModel(data);
    } else if (data.commentId && !data.replyId) {
      response = await LikeUnlikeComment(data);
    } else if (data.replyId) {
      response = await LikeUnlikeReply(data);
    }

    if (!response) throw new NotFoundError();

    res.status(201).send(response);
  }
);

export { router as newLikeRouter };
