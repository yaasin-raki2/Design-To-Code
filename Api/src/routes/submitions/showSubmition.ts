import express, { Request, Response } from "express";

import { Submition } from "../../models/submition";
import { showValidation } from "../../validations/general/showValidation";
import { validateRequest } from "../../middlewares/validate-request";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get(
  "/api/submitions/:id",
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const submition = await Submition.findById(req.params.id);

    if (!submition) {
      throw new NotFoundError();
    }

    res.status(200).send(submition);
  }
);

export { router as showSubmitionRouter };
