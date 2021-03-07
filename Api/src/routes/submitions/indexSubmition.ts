import express, { Request, Response } from "express";

import { Submition } from "../../models/submition";

const router = express.Router();

router.get("/api/submitions", async (req: Request, res: Response) => {
  const submitions = await Submition.find({});

  res.status(200).send(submitions);
});

export { router as indexSubmitionRouter };
