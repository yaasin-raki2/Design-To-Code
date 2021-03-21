import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { requireAuth } from "../../middlewares/require-auth";

import { Submition } from "../../models/submition";

const router = express.Router();

router.get("/api/submitions", requireAuth, async (req: Request, res: Response) => {
  let submitions: any;

  if (req.body.designName === undefined) {
    submitions = await Submition.find({ userId: req.currentUser!.id });

    if (!submitions) throw new NotFoundError();
  } else {
    submitions = await Submition.find({ designName: req.body.designName });

    if (!submitions) throw new NotFoundError();
  }

  res.status(200).send(submitions);
});

export { router as indexSubmitionRouter };
