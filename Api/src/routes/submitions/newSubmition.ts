import express, { Request, Response } from "express";

import { Submition } from "../../models/submition";
import { validateRequest } from "../../middlewares/validate-request";
import { newSubmitionValidation } from "../../validations/submitions/newSubmitionValidation";
import { Design } from "../../models/design";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.post(
  "/api/submitions",
  newSubmitionValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const data = req.body;

    const design = await Design.findOne({ name: data.designName });

    if (!design) throw new NotFoundError();

    const submition = Submition.build({
      userId: data.userId,
      designName: data.designName,
      image: data.image,
      sourceCode: {
        platform: data.sourceCode.platform,
        link: data.sourceCode.link,
      },
    });

    design.submitions.submitionsArray.push(submition._id);

    design.submitions.quantity++;

    await design.save();

    await submition.save();

    res.status(201).send(submition);
  }
);

export { router as newSubmitionRouter };
