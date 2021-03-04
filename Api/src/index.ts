import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import "express-async-errors";

import { newDesignRouter } from "./routes/designs/new";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
const db = mongoose.connection;

app.use(json());

app.use(newDesignRouter);

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
