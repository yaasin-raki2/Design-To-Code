import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { NotAuthorizedError } from "../errors/not-authorized-error";
import { UserPayload } from "../models/user";

// Reach out to the Request type definition inside express
// And adding currentUser type to it
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = jwt.verify(req.session?.jwt, process.env.JWT_KEY!) as UserPayload;

    req.currentUser = payload;
  } catch (err) {
    throw new NotAuthorizedError();
  }

  next();
};
