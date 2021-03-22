import mongoose from "mongoose";

interface PaymentAttrs {
  purchasing: string;
  purchaseId: string;
  price: number;
  stripeId: string;
  userId: string;
}

export interface PaymentDoc extends mongoose.Document {
  purchasing: string;
  purchaseId: string;
  price: number;
  stripeId: string;
  userId: string;
  createdAt: Date;
}

export interface PaymentModel extends mongoose.Model<PaymentDoc> {
  build(attrs: PaymentAttrs): PaymentDoc;
}

const paymentSchema = new mongoose.Schema(
  {
    purchasing: {
      required: true,
      type: String,
    },
    purchaseId: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    stripeId: {
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

paymentSchema.statics.build = (attrs: PaymentAttrs) => {
  return new Payment(attrs);
};

export const Payment = mongoose.model<PaymentDoc, PaymentModel>("Payment", paymentSchema);
