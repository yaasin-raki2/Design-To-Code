import { ObjectId } from "mongoose";

import { Submition, SubmitionModel } from "../../models/submition";
import { NotFoundError } from "../../errors/not-found-error";
import { Design, DesignModel } from "../../models/design";
import { Models } from "../enums";

export interface GetLikeReplyData {
  model: Models;
  modelId: ObjectId;
  commentId: ObjectId;
  replyId: ObjectId;
}

export const GetLikesReply = async (data: GetLikeReplyData) => {
  const { model, modelId, commentId, replyId } = data;

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
  ].replies!.repliesArray.findIndex((reply) => reply._id == replyId);

  if (replyIndex === -1) throw new NotFoundError();

  return document.comments.commentsArray[commentIndex].replies?.repliesArray[replyIndex]
    .likes?.likesOwners;
};
