import { NotFoundError } from "../../errors/not-found-error";
import { User } from "../../models/user";

export const FollowUnfollow = async (userId: string, userToFollowId: string) => {
  const userToFollow = await User.findById(userToFollowId);

  if (!userToFollow) throw new NotFoundError();

  //@ts-ignore
  let exists = userToFollow.followers?.followersArray.includes(userId);

  if (exists) {
    await userToFollow.updateOne({
      $pull: { "followers.followersArray": userId },
      $inc: { "followers.quantity": -1 },
    });
  } else if (!exists) {
    await userToFollow.updateOne({
      $addToSet: { "followers.followersArray": userId },
      $inc: { "followers.quantity": 1 },
    });
  }

  await userToFollow.save();

  const user = await User.findById(userId);

  if (!user) throw new NotFoundError();

  //@ts-ignore
  exists = user.following?.followingArray.includes(userToFollowId);

  if (exists) {
    await user.updateOne({
      $pull: { "following.followingArray": userToFollowId },
      $inc: { "following.quantity": -1 },
    });
  } else if (!exists) {
    await user.updateOne({
      $addToSet: { "following.followingArray": userToFollowId },
      $inc: { "following.quantity": 1 },
    });
  }

  await user.save();

  return { user, userToFollow };
};
