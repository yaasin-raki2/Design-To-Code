import express, { Request, Response } from "express";

import { likeUnlikeValidation } from "../../validations/likes/likeUnlikeValidation";
import { LikeUnlikeComment } from "../../utilities/likes/LikeUnlikeComment";
import { LikeUnlikeModel } from "../../utilities/likes/LikeUnlikeModel";
import { LikeUnlikeReply } from "../../utilities/likes/LikeUnlikeReply";
import { validateRequest } from "../../middlewares/validate-request";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.post(
  "/api/likes",
  likeUnlikeValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = req.body;

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
