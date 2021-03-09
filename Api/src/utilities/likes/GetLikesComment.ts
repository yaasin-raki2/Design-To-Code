import { ObjectId } from "mongoose";

import { Submition, SubmitionModel } from "../../models/submition";
import { NotFoundError } from "../../errors/not-found-error";
import { Design, DesignModel } from "../../models/design";
import { Models } from "../enums";

export interface GetLikeModelData {
  model: Models;
  modelId: ObjectId;
  commentId: ObjectId;
}

export const GetLikesComment = async (data: GetLikeModelData) => {
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

  return document.comments.commentsArray[commentIndex].likes?.likesOwners;
};
