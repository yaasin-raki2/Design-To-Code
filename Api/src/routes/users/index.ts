import { signinRouter } from "./signin";
import { signupRouter } from "./signup";
import { signoutRouter } from "./signout";
import { banUserRouter } from "./banUser";
import { updateUserRouter } from "./updateUser";

export const UserRouters = [
  signinRouter,
  signupRouter,
  signoutRouter,
  banUserRouter,
  updateUserRouter,
];
