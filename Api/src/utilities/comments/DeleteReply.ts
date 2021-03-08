import { ObjectId } from "mongoose";

import { Submition, SubmitionModel } from "../../models/submition";
import { NotFoundError } from "../../errors/not-found-error";
import { Design, DesignModel } from "../../models/design";
import { Models } from "../enums";

export interface ReplyToDeleteData {
  userId: string;
  commentId: ObjectId;
  model: Models;
  modelId: ObjectId;
  replyId: ObjectId;
}

export const DeleteReply = async (data: ReplyToDeleteData) => {
  const { commentId, userId, model, modelId, replyId } = data;

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

  const replyIndex = document.comments.commentsArray[
    commentIndex
  ].replies?.repliesArray.findIndex((reply) => reply._id == replyId);

  if (replyIndex === -1) throw new NotFoundError();

  document.comments.commentsArray[commentIndex].replies?.repliesArray.splice(
    replyIndex!,
    1
  );

  document.comments.commentsArray[commentIndex].replies!.quantity--;

  await document.save();

  return document;
};
