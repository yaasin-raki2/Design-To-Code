import { Request, Response, NextFunction } from "express";

import { Design } from "../models/design";
import { Submition } from "../models/submition";
import { Models } from "../utilities/enums";
import { Viewed } from "../utilities/viewed/Viewed";

export const viewed = async (req: Request, res: Response, next: NextFunction) => {
  const {
    params: { id },
    //@ts-ignore
    currentUser: { id: userId },
  } = req;

  if (req.url.includes(Models.design)) {
    await Viewed(Design, id, userId);
  } else if (req.url.includes(Models.submition)) {
    await Viewed(Submition, id, userId);
  }

  next();
};
