import { Notification, NotificationAttrs } from "../../models/notification";
import { NotFoundError } from "../../errors/not-found-error";
import { User } from "../../models/user";

export const sendNotification = async (args: NotificationAttrs) => {
  const notification = await Notification.build(args);

  const user = await User.findById(args.userId);

  if (!user) throw new NotFoundError();

  await user.updateOne({
    $push: { "newNotifications.notifications": notification._id },
  });

  await notification.save();
};
