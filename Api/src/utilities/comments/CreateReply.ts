import { ObjectId } from "mongoose";

import { Design, DesignModel } from "../../models/design";
import { Submition, SubmitionModel } from "../../models/submition";
import { NotFoundError } from "../../errors/not-found-error";
import { Models } from "../enums";

export interface ReplyData {
  userId: string;
  reply: string;
  model: Models;
  modelId: ObjectId;
  commentId: ObjectId;
}

export const CreateReply = async (data: ReplyData) => {
  const { userId, reply, model, modelId, commentId } = data;

  let Model: DesignModel | SubmitionModel = Design;

  if (model === Models.design) {
    Model = Design;
  } else if (model === Models.submition) {
    Model = Submition;
  }

  const document = await Model.findById(modelId);

  if (!document) throw new NotFoundError();

  const commentIndex = document.comments.commentsArray.findIndex(
    (comment) => comment._id == commentId
  );

  if (commentIndex === -1) throw new NotFoundError();

  document.comments.commentsArray[commentIndex].replies!.repliesArray.push({
    reply: reply,
    userId: userId,
  });

  document.comments.commentsArray[commentIndex].replies!.quantity++;

  await document.save();

  return document;
};
