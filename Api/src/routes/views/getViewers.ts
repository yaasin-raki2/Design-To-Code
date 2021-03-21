import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";

import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { Design, DesignModel } from "../../models/design";
import { Submition, SubmitionModel } from "../../models/submition";
import { Models } from "../../utilities/enums";
import { getViewsValidations } from "../../validations/views/getViewsValidations";

const router = express.Router();

router.get(
  "/api/views/:id",
  requireAuth,
  getViewsValidations,
  validateRequest,
  async (req: Request, res: Response) => {
    let Model: DesignModel | SubmitionModel;

    if (req.query.model === Models.design) {
      Model = Design;
    } else if (req.query.model === Models.submition) {
      Model = Submition;
    } else {
      throw new NotFoundError();
    }

    const views = await Model.findById(req.params.id)
      .populate("views.viewsArray.userId")
      .select("views");

    if (!views) {
      throw new NotFoundError();
    }

    res.send(views);
  }
);

export { router as getViewersRouter };
