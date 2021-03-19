import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { BadRequestError } from "../../errors/bad-request-error";
import { validateRequest } from "../../middlewares/validate-request";
import { User, UserPayload } from "../../models/user";
import { signupValidation } from "../../validations/users/signupValidation";

const router = express.Router();

router.post(
  "/api/users/signup",
  signupValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password, userName, userType } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.build({ email, password, userName, userType });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
        userName: user.userName,
        userType: user.userType,
      } as UserPayload,
      process.env.JWT_KEY!
    );

    // Store it on the session object
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
