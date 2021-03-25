import express, { Request, Response } from "express";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import { NotFoundError } from "../../errors/not-found-error";

import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { Notification } from "../../models/notification";
import { User } from "../../models/user";
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

    const user = await User.findById(notification.userId);

    if (!user) throw new NotFoundError();

    await user.updateOne({
      $pull: { "newNotifications.notifications": notification._id },
      $push: { "seenNotifications.notifications": notification._id },
      $inc: {
        "newNotifications.quantity": -1,
        "seenNotifications.quantity": 1,
      },
    });

    res.send(user);
  }
);

export { router as UpdateNotification };
