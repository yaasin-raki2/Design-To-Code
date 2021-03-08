import express, { Request, Response } from "express";

import { indexCommentValidation } from "../../validations/indexCommentValidation";
import { validateRequest } from "../../middlewares/validate-request";
import { NotFoundError } from "../../errors/not-found-error";
import { GetComments } from "../../utilities/comments/GetComments";
import { GetReplies } from "../../utilities/comments/GetReplies";

const router = express.Router();

router.get(
  "/api/comments",
  indexCommentValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = req.body;

    let response: {} | undefined;

    if (!data.commentId) {
      response = await GetComments(data);
    } else if (data.commentId) {
      response = await GetReplies(data);
    }

    if (!response) throw new NotFoundError();

    res.status(200).send(response);
  }
);

export { router as indexCommentRouter };
