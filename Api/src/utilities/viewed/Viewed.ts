import { NotFoundError } from "../../errors/not-found-error";
import { DesignModel } from "../../models/design";
import { SubmitionModel } from "../../models/submition";

export const Viewed = async (
  Model: DesignModel | SubmitionModel,
  id: string,
  userId: string
) => {
  const document = await Model.findById(id);

  if (!document) throw new NotFoundError();

  const viewsOwnerIndex = document.views.viewsArray.findIndex(
    (item) => item.userId == userId
  );

  const newViewsOwnerDetails = {
    userId: userId,
    quantity: 1,
    dates: [Date.now()],
  };

  if (viewsOwnerIndex === -1) {
    await document.updateOne({
      $push: { "views.viewsArray": newViewsOwnerDetails },
      $inc: { "views.quantity": 1 },
    });
  } else {
    //@ts-ignore
    document.views.viewsArray[viewsOwnerIndex].dates.push(Date.now());
    document.views.viewsArray[viewsOwnerIndex].quantity++;
    document.views.quantity++;
  }

  await document.save();
};
