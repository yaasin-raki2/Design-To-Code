import { ObjectId } from "mongoose";
import { NotFoundError } from "../../errors/not-found-error";
import { Design, DesignModel } from "../../models/design";
import { Submition, SubmitionModel } from "../../models/submition";

import { Models } from "../enums";

export interface CommentsToGetData {
  model: Models;
  modelId: ObjectId;
}

export const GetComments = async (data: CommentsToGetData) => {
  const { model, modelId } = data;

  let Model: DesignModel | SubmitionModel = Design;

  if (model === Models.design) {
    Model = Design;
  } else if (model === Models.submition) {
    Model = Submition;
  }

  const document = await Model.findById(modelId);

  if (!document) throw new NotFoundError();

  return document.comments.commentsArray;
};
