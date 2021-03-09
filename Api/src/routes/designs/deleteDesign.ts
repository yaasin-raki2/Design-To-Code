import express, { Request, Response } from "express";

import { Design } from "../../models/design";
import { validateRequest } from "../../middlewares/validate-request";
import { showValidation } from "../../validations/general/showValidation";

const router = express.Router();

router.delete(
  "/api/designs/:id",
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    await Design.findByIdAndDelete(req.params.id);

    res.status(200).send({});
  }
);

export { router as deleteDesignRouter };
