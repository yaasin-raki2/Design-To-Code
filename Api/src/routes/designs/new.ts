import express, { Request, Response } from "express";

import { Design } from "../../models/design";

const router = express.Router();

router.post("/api/designs", async (req: Request, res: Response) => {
  const data = req.body;

  console.log("This is req", req.body);

  const design = Design.build({
    colorPalette: data.colorPalette,
    difficulty: data.difficulty,
    file: {
      link: data.file.link,
      typeOfFile: data.file.typeOfFile,
    },
    image: data.image,
  });
  await design.save();

  console.log(design);

  res.send(design);
});

export { router as newDesignRouter };
