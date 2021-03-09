import express, { Request, Response } from "express";

import { Submition } from "../../models/submition";
import { validateRequest } from "../../middlewares/validate-request";
import { NotFoundError } from "../../errors/not-found-error";
import { showValidation } from "../../validations/general/showValidation";
import { Design } from "../../models/design";

const router = express.Router();

router.delete(
  "/api/submitions/:id",
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const submition = await Submition.findById(req.params.id);

    if (!submition) throw new NotFoundError();

    const design = await Design.findOne({ name: submition.designName });

    if (!design) throw new NotFoundError();

    const submitionIndex = design.submitions.submitionsArray.findIndex(
      (item) => item._id == submition._id
    );

    design.submitions.submitionsArray.splice(submitionIndex, 1);

    design.submitions.quantity--;

    await submition.deleteOne();

    await design.save();

    res.status(200).send(design);
  }
);

export { router as deleteSubmitionRouter };
