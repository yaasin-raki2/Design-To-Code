import express, { Request, Response } from "express";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { NotFoundError } from "../../errors/not-found-error";
import { showValidation } from "../../validations/general/showValidation";

const router = express.Router();

router.get(
  "/api/designs/:id",
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const design = await Design.findById(req.params.id);

    if (!design) {
      throw new NotFoundError();
    }

    res.status(200).send(design);
  }
);

export { router as showDesignRouter };
