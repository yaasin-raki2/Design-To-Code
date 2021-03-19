import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import * as dotenv from "dotenv";
import "express-async-errors";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

import { newDesignRouter } from "./routes/designs/newDesign";
import { updateDesignRouter } from "./routes/designs/updateDesign";
import { showDesignRouter } from "./routes/designs/showDesign";
import { indexDesignRouter } from "./routes/designs/indexDesign";
import { deleteDesignRouter } from "./routes/designs/deleteDesign";

import { newSubmitionRouter } from "./routes/submitions/newSubmition";
import { updateSubmitionRouter } from "./routes/submitions/updateSubmition";
import { showSubmitionRouter } from "./routes/submitions/showSubmition";
import { indexSubmitionRouter } from "./routes/submitions/indexSubmition";
import { deleteSubmitionRouter } from "./routes/submitions/deleteSubmition";

import { signinRouter } from "./routes/users/signin";
import { signupRouter } from "./routes/users/signup";
import { signoutRouter } from "./routes/users/signout";

import { newCommentRouter } from "./routes/comments/newComment";
import { deleteCommentRouter } from "./routes/comments/deleteComment";
import { indexCommentRouter } from "./routes/comments/indexComment";

import { newLikeRouter } from "./routes/likes/likeUnlike";
import { indexLikeOwnersRouter } from "./routes/likes/indexLikeOwners";

const app = express();
const db = mongoose.connection;

dotenv.config();

app.use(json());

app.use(cookieSession({ signed: false }));

app.use([signinRouter, signupRouter, signoutRouter]);

app.use([newCommentRouter, deleteCommentRouter, indexCommentRouter]);

app.use([newLikeRouter, indexLikeOwnersRouter]);

app.use([
  newDesignRouter,
  updateDesignRouter,
  showDesignRouter,
  indexDesignRouter,
  deleteDesignRouter,
]);

app.use([
  newSubmitionRouter,
  updateSubmitionRouter,
  showSubmitionRouter,
  indexSubmitionRouter,
  deleteSubmitionRouter,
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

export { app };
