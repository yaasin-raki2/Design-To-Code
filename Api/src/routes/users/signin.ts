import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { validateRequest } from "../../middlewares/validate-request";
import { BadRequestError } from "../../errors/bad-request-error";
import { User, UserPayload } from "../../models/user";
import { Password } from "../../services/services";
import { signinValidation } from "../../validations/users/signinValidation";

const router = express.Router();

router.post(
  "/api/users/signin",
  signinValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    const passwordsMatch = await Password.compare(existingUser.password, password);

    if (!passwordsMatch) {
      throw new BadRequestError("Invalid credentials");
    }

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
        userName: existingUser.userName,
        userType: existingUser.userType,
      } as UserPayload,
      process.env.JWT_KEY!
    );

    // Store it on the session object
    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };
