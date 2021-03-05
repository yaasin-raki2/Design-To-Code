import express, { Request, Response } from "express";

import { Design } from "../../models/design";

const router = express.Router();

router.get("/api/designs", async (req: Request, res: Response) => {
  const designs = await Design.find({});

  res.status(200).send(designs);
});

export { router as indexDesignRouter };
