import express, { Request, Response } from "express";

import { NotFoundError } from "../../errors/not-found-error";
import { DesignDoc } from "../../models/design";
import { SubmitionDoc } from "../../models/submition";
import { DeleteComment } from "../../utilities/comments/DeleteComment";
import { DeleteReply } from "../../utilities/comments/DeleteReply";
import { deleteCommentValidation } from "../../validations/comments/deleteCommentValidation";
import { validateRequest } from "../../middlewares/validate-request";
import { requireAuth } from "../../middlewares/require-auth";

const router = express.Router();

router.delete(
  "/api/comments",
  requireAuth,
  deleteCommentValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = { ...req.body, userId: req.currentUser!.id };

    let response: DesignDoc | SubmitionDoc | undefined;

    if (!data.replyId) {
      response = await DeleteComment(data);
    } else if (data.replyId) {
      response = await DeleteReply(data);
    }

    if (!response) throw new NotFoundError();

    res.status(200).send(response);
  }
);

export { router as deleteCommentRouter };
