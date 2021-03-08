import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import "express-async-errors";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

import { newDesignRouter } from "./routes/designs/newDesign";
import { updateDesignRouter } from "./routes/designs/updateDesign";
import { showDesignRouter } from "./routes/designs/showDesign";
import { indexDesignRouter } from "./routes/designs/indexDesign";

import { newSubmitionRouter } from "./routes/submitions/newSubmition";
import { updateSubmitionRouter } from "./routes/submitions/updateSubmition";
import { showSubmitionRouter } from "./routes/submitions/showSubmition";
import { indexSubmitionRouter } from "./routes/submitions/indexSubmition";

import { newCommentRouter } from "./routes/comments/newComment";
import { deleteCommentRouter } from "./routes/comments/deleteComment";
import { indexCommentRouter } from "./routes/comments/indexComment";

const app = express();
const db = mongoose.connection;

app.use(json());

app.use([newDesignRouter, updateDesignRouter, showDesignRouter, indexDesignRouter]);

app.use([
  newSubmitionRouter,
  updateSubmitionRouter,
  showSubmitionRouter,
  indexSubmitionRouter,
]);

app.use([newCommentRouter, deleteCommentRouter, indexCommentRouter]);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});

export { app };
