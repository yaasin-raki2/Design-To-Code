import mongoose from "mongoose";

export interface NotificationAttrs {
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
  seen: boolean;
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
    seen: {
      required: false,
      type: Boolean,
      default: false,
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
