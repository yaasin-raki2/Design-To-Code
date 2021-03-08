import { ObjectId } from "mongoose";

import { Submition, SubmitionModel } from "../../models/submition";
import { NotFoundError } from "../../errors/not-found-error";
import { Design, DesignModel } from "../../models/design";
import { Models } from "../enums";

export interface LikeReplyData {
  userId: string;
  model: Models;
  modelId: ObjectId;
  commentId: ObjectId;
  replyId: ObjectId;
}

export const LikeUnlikeReply = async (data: LikeReplyData) => {
  const { userId, model, modelId, commentId, replyId } = data;

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

  const likeOwnerIndex = document.comments.commentsArray[
    commentIndex
  ].replies!.repliesArray[replyIndex].likes!.likesOwners.findIndex(
    (owner) => owner.userId == userId
  );

  //like a reply if user haven't liked it before.
  //If he did liked this reply before:
  //like will be reverted, which means:
  //If it liked then it will become unliked and vice versa
  if (likeOwnerIndex === -1) {
    document.comments.commentsArray[commentIndex].replies!.repliesArray[
      replyIndex
    ].likes!.likesOwners.push({
      userId: userId,
      liked: true,
    });
    document.comments.commentsArray[commentIndex].replies!.repliesArray[replyIndex].likes!
      .quantity++;
  } else {
    document.comments.commentsArray[commentIndex].replies!.repliesArray[
      replyIndex
    ].likes!.likesOwners[likeOwnerIndex].liked = !document.comments.commentsArray[
      commentIndex
    ].replies!.repliesArray[replyIndex].likes!.likesOwners[likeOwnerIndex].liked;

    document.comments.commentsArray[commentIndex].replies!.repliesArray[replyIndex].likes!
      .likesOwners[likeOwnerIndex].liked
      ? document.comments.commentsArray[commentIndex].replies!.repliesArray[replyIndex]
          .likes!.quantity++
      : document.comments.commentsArray[commentIndex].replies!.repliesArray[replyIndex]
          .likes!.quantity--;
  }

  await document.save();

  return document.comments.commentsArray[commentIndex].replies!.repliesArray[replyIndex]
    .likes;
};
