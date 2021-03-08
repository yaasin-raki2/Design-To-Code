import { ObjectId } from "mongoose";
import { NotFoundError } from "../errors/not-found-error";
import { Design, DesignModel } from "../models/design";
import { Submition, SubmitionModel } from "../models/submition";

import { Models } from "./enums";

export interface RepliesToGetData {
  model: Models;
  modelId: ObjectId;
  commentId: ObjectId;
}

export const GetReplies = async (data: RepliesToGetData) => {
  const { commentId, model, modelId } = data;

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

  return document.comments.commentsArray[commentIndex].replies?.repliesArray;
};
