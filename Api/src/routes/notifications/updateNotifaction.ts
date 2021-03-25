import express, { Request, Response } from "express";

import { NotAuthorizedError } from "../../errors/not-authorized-error";
import { NotFoundError } from "../../errors/not-found-error";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { Notification } from "../../models/notification";
import { showValidation } from "../../validations/general/showValidation";

const router = express.Router();

router.patch(
  "/api/notifications/:id",
  requireAuth,
  showValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const notification = await Notification.findById(req.params.id);

    if (!notification) throw new NotFoundError();

    if (req.currentUser!.id !== notification.userId) throw new NotAuthorizedError();

    notification.seen = true;

    res.send(notification);
  }
);

export { router as UpdateNotification };
