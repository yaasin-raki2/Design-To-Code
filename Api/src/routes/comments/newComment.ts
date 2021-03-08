import express, { Request, Response } from "express";

import { DesignDoc } from "../../models/design";
import { SubmitionDoc } from "../../models/submition";
import { CreateComment } from "../../utilities/comments/CreateComment";
import { CreateReply } from "../../utilities/comments/CreateReply";
import { NotFoundError } from "../../errors/not-found-error";
import { validateRequest } from "../../middlewares/validate-request";
import { newCommentValidation } from "../../validations/comments/newCommentValidation";

const router = express.Router();

router.post(
  "/api/comments",
  newCommentValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = req.body;

    let response: DesignDoc | SubmitionDoc | undefined;

    if (data.comment) {
      response = await CreateComment(data);
    } else if (data.reply) {
      response = await CreateReply(data);
    }

    if (!response) throw new NotFoundError();

    res.status(201).send(response);
  }
);

export { router as newCommentRouter };
