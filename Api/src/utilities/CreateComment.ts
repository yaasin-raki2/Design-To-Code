import { ObjectId } from "mongoose";

import { Design, DesignModel } from "../models/design";
import { Submition, SubmitionModel } from "../models/submition";
import { NotFoundError } from "../errors/not-found-error";
import { Models } from "./enums";

export interface CommentData {
  userId: string;
  comment: string;
  model: Models;
  modelId: ObjectId;
}

export const CreateComment = async (data: CommentData) => {
  const { userId, comment, model, modelId } = data;

  let Model: DesignModel | SubmitionModel = Design;

  if (model === Models.design) {
    Model = Design;
  } else if (model === Models.submition) {
    Model = Submition;
  }

  const document = await Model.findById(modelId);

  if (!document) throw new NotFoundError();

  document.comments.commentsArray.push({
    comment: comment,
    userId: userId,
  });

  document.comments.quantity++;

  await document.save();

  return document;
};
