import express, { Request, Response } from "express";

import { requireAuth } from "../../middlewares/require-auth";
import { Notification } from "../../models/notification";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get("/api/notifications", requireAuth, async (req: Request, res: Response) => {
  const notifications = await Notification.find({ userId: req.currentUser!.id });

  if (!notifications) throw new NotFoundError();

  res.send(notifications);
});

export { router as indexNotificationsRouter };
