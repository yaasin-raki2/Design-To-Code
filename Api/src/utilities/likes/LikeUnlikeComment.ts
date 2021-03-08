import { ObjectId } from "mongoose";

import { Submition, SubmitionModel } from "../../models/submition";
import { NotFoundError } from "../../errors/not-found-error";
import { Design, DesignModel } from "../../models/design";
import { Models } from "../enums";

export interface LikeCommentData {
  userId: string;
  model: Models;
  modelId: ObjectId;
  commentId: ObjectId;
}

export const LikeUnlikeComment = async (data: LikeCommentData) => {
  const { userId, model, modelId, commentId } = data;

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

  const likeOwnerIndex = document.comments.commentsArray[
    commentIndex
  ].likes!.likesOwners.findIndex((owner) => owner.userId == userId);

  if (likeOwnerIndex === -1) {
    document.comments.commentsArray[commentIndex].likes?.likesOwners.push({
      userId: userId,
      liked: true,
    });
    document.comments.commentsArray[commentIndex].likes!.quantity++;
  } else {
    document.comments.commentsArray[commentIndex].likes!.likesOwners[
      likeOwnerIndex
    ].liked = !document.comments.commentsArray[commentIndex].likes!.likesOwners[
      likeOwnerIndex
    ].liked;

    document.comments.commentsArray[commentIndex].likes!.likesOwners[likeOwnerIndex].liked
      ? document.comments.commentsArray[commentIndex].likes!.quantity++
      : document.comments.commentsArray[commentIndex].likes!.quantity--;
  }

  await document.save();

  return document.comments.commentsArray[commentIndex].likes;
};
