import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import compression from "compression";
import helmet from "helmet";

import * as dotenv from "dotenv";

import "express-async-errors";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

import { DesignRouters } from "./routes/designs";
import { SubmitionRouters } from "./routes/submitions";
import { UserRouters } from "./routes/users";
import { CommentRouters } from "./routes/comments";
import { LikeRouters } from "./routes/likes";
import { FollowersRouters } from "./routes/follower";

export const app = express();
export const db = mongoose.connection;

dotenv.config();

app.use(compression());

app.use(helmet());

app.use(json());

app.use(cookieSession({ signed: false }));

app.use([
  ...DesignRouters,
  ...SubmitionRouters,
  ...UserRouters,
  ...CommentRouters,
  ...LikeRouters,
  ...FollowersRouters,
]);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

mongoose.connect(
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI!
    : "mongodb://localhost:27017/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
