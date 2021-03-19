import { Request, Response, NextFunction } from "express";

import { User } from "../models/user";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { NotFoundError } from "../errors/not-found-error";

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.currentUser!.id);

    if (!user) {
      throw new NotFoundError();
    }

    if (user.id !== process.env.ADMIN_ID) {
      throw new NotAuthorizedError();
    }
  } catch (err) {
    throw new NotAuthorizedError();
  }

  next();
};
