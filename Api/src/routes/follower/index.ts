import { followUnfollowRouter } from "./followUnfollow";
import { indexFollowersRouter } from "./indexFollowers";
import { indexFollowingRouter } from "./indexFollowing";

export const FollowersRouters = [
  followUnfollowRouter,
  indexFollowersRouter,
  indexFollowingRouter,
];
