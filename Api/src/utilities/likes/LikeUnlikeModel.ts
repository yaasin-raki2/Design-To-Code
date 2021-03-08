import { ObjectId } from "mongoose";

import { Submition, SubmitionModel } from "../../models/submition";
import { NotFoundError } from "../../errors/not-found-error";
import { Design, DesignModel } from "../../models/design";
import { Models } from "../enums";

export interface LikeModelData {
  userId: string;
  model: Models;
  modelId: ObjectId;
}

export const LikeUnlikeModel = async (data: LikeModelData) => {
  const { userId, model, modelId } = data;

  let Model: DesignModel | SubmitionModel = Design;

  if (model === Models.design) {
    Model = Design;
  } else if (model === Models.submition) {
    Model = Submition;
  }

  const document = await Model.findById(modelId);

  if (!document) throw new NotFoundError();

  const likeOwnerIndex = document.likes.likesOwners.findIndex(
    (owner) => owner.userId == userId
  );

  if (likeOwnerIndex === -1) {
    document.likes.likesOwners.push({
      userId: userId,
      liked: true,
    });
    document.likes.quantity++;
  } else {
    document.likes.likesOwners[likeOwnerIndex].liked = !document.likes.likesOwners[
      likeOwnerIndex
    ].liked;

    document.likes.likesOwners[likeOwnerIndex].liked
      ? document.likes.quantity++
      : document.likes.quantity--;
  }

  await document.save();

  return document.likes;
};
