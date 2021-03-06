import express, { Request, Response } from "express";

import { Submition } from "../../models/submition";
import { validateRequest } from "../../middlewares/validate-request";
import { newSubmitionValidation } from "../../validations/newSubmition";

const router = express.Router();

router.post(
  "/api/submitions",
  newSubmitionValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = req.body;

    const submition = Submition.build({
      userId: data.userId,
      designName: data.designName,
      image: data.image,
      sourceCode: {
        platform: data.sourceCode.platform,
        link: data.sourceCode.link,
      },
    });
    await submition.save();

    res.status(201).send(submition);
  }
);

export { router as newSubmitionRouter };
