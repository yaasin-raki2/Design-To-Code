import express, { Request, Response } from "express";

// import { stripe } from "../../stripe/stripe";
import { requireAuth } from "../../middlewares/require-auth";
import { Design } from "../../models/design";
import { NotFoundError } from "../../errors/not-found-error";
import { BadRequestError } from "../../errors/bad-request-error";
import { Payment } from "../../models/payment";

const router = express.Router();

router.post("/api/payments/designs", requireAuth, async (req: Request, res: Response) => {
  const data = req.body;

  const design = await Design.findById(data.purchaseId);

  if (!design) {
    throw new NotFoundError();
  }

  if (!design.paid) {
    throw new BadRequestError("Bro, This is Free ._.");
  }

  // const charge = await stripe.charges.create({
  //   currency: "usd",
  //   amount: design.price * 100,
  //   source: data.token, //tok_visa
  // });

  const payment = Payment.build({
    purchaseId: data.purchaseId,
    price: design.price,
    // stripeId: charge.id,
    userId: req.currentUser!.id,
  });

  if (design.purchasedBy.buyers.includes(req.currentUser!.id)) {
    throw new BadRequestError("You already bought this Item");
  }

  await design.updateOne({
    $push: { "purchasedBy.buyers": req.currentUser!.id },
    $inc: { "purchasedBy.quantity": 1 },
  });

  await payment.save();

  res.status(201).send(payment);
});

export { router as newDesignPaymentRouter };
