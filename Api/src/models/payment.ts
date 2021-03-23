import mongoose from "mongoose";

interface PaymentAttrs {
  purchaseId: string;
  price: number;
  userId: string;
}

export interface PaymentDoc extends mongoose.Document {
  purchaseId: string;
  price: number;
  userId: string;
  createdAt: Date;
}

export interface PaymentModel extends mongoose.Model<PaymentDoc> {
  build(attrs: PaymentAttrs): PaymentDoc;
}

const paymentSchema = new mongoose.Schema(
  {
    purchaseId: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
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
