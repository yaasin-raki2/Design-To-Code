import { Request, Response, NextFunction } from "express";

import { Design } from "../models/design";
import { Submition } from "../models/submition";
import { Viewed } from "../utilities/viewed/Viewed";

export const viewed = async (req: Request, res: Response, next: NextFunction) => {
  const {
    params: { id },
    //@ts-ignore
    currentUser: { id: userId },
  } = req;

  if (req.url.includes("designs")) {
    await Viewed(Design, id, userId);
  } else if (req.url.includes("submitions")) {
    await Viewed(Submition, id, userId);
  }

  next();
};
