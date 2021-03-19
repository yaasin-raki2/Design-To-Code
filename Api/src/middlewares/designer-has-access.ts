import { Request, Response, NextFunction } from "express";

import { User } from "../models/user";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { NotFoundError } from "../errors/not-found-error";
import { UserType } from "../utilities/enums";

export const designerHasAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findById(req.currentUser!.id);

  if (!user) {
    throw new NotFoundError();
  }

  if (user.id === process.env.ADMIN_ID) {
    return next();
  }

  if (user.banned || user.userType !== UserType.Designer) {
    throw new NotAuthorizedError();
  }

  next();
};
