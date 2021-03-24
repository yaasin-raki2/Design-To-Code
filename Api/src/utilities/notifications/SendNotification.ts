import { Notification, NotificationDoc } from "../../models/notification";
import { NotFoundError } from "../../errors/not-found-error";
import { User } from "../../models/user";

export const sendNotification = async (args: NotificationDoc) => {
  const notification = await Notification.build(args);

  const user = await User.findById(args.userId);

  if (!user) throw new NotFoundError();

  await user.updateOne({
    $push: { "newNotifications.notifications": notification._id },
    $inc: { "newNotifications.quantity": 1 },
  });

  await notification.save();
};
