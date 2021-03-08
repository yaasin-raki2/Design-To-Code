import { ObjectId } from "mongoose";

import { Submition, SubmitionModel } from "../../models/submition";
import { NotFoundError } from "../../errors/not-found-error";
import { Design, DesignModel } from "../../models/design";
import { Models } from "../enums";

export interface CommentToDeleteData {
  userId: string;
  commentId: ObjectId;
  model: Models;
  modelId: ObjectId;
}

export const DeleteComment = async (data: CommentToDeleteData) => {
  const { commentId, userId, model, modelId } = data;

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

  document.comments.commentsArray.splice(commentIndex, 1);

  document.comments.quantity--;

  await document.save();

  return document;
};
