import express, { Request, Response } from "express";

import { indexLikeOwnersValidation } from "../../validations/likes/indexLikeOwnersValidation";
import { GetLikesComment } from "../../utilities/likes/GetLikesComment";
import { validateRequest } from "../../middlewares/validate-request";
import { GetLikesModel } from "../../utilities/likes/GetLikesModel";
import { GetLikesReply } from "../../utilities/likes/GetLikesReply";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get(
  "/api/likes",
  indexLikeOwnersValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = req.body;

    let response: {} | undefined;

    if (!data.commentId && !data.replyId) {
      response = await GetLikesModel(data);
    } else if (data.commentId && !data.replyId) {
      response = await GetLikesComment(data);
    } else if (data.replyId) {
      response = await GetLikesReply(data);
    }

    if (!response) throw new NotFoundError();

    res.status(200).send(response);
  }
);

export { router as indexLikeOwnersRouter };
