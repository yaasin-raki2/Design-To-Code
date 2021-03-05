import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import "express-async-errors";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

import { newDesignRouter } from "./routes/designs/new";
import { updateDesignRouter } from "./routes/designs/update";
import { showDesignRouter } from "./routes/designs/show";

const app = express();
const db = mongoose.connection;

app.use(json());

app.use(newDesignRouter);
app.use(updateDesignRouter);
app.use(showDesignRouter);

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
