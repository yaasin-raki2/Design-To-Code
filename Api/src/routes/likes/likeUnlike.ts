import express, { Request, Response } from "express";

import { NotFoundError } from "../../errors/not-found-error";
import { LikeUnlikeComment } from "../../utilities/likes/LikeUnlikeComment";
import { LikeUnlikeModel } from "../../utilities/likes/LikeUnlikeModel";
import { LikeUnlikeReply } from "../../utilities/likes/LikeUnlikeReply";

const router = express.Router();

router.post("/api/likes", async (req: Request, res: Response) => {
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
});

export { router as newLikeRouter };
