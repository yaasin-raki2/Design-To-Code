import mongoose from "mongoose";

interface NotificationAttrs {
  message: string;
  image: string;
  link: string;
  userId: string;
}

export interface NotificationDoc extends mongoose.Document {
  message: string;
  image: string;
  link: string;
  userId: string;
  createdAt: Date;
}

export interface NotificationModel extends mongoose.Model<NotificationDoc> {
  build(attrs: NotificationAttrs): NotificationDoc;
}

const notificationSchema = new mongoose.Schema(
  {
    message: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
    userId: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

notificationSchema.statics.build = (attrs: NotificationAttrs) => {
  return new Notification(attrs);
};

export const Notification = mongoose.model<NotificationDoc, NotificationModel>(
  "Notification",
  notificationSchema
);
