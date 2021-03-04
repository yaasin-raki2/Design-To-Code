import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";

import { newDesignRouter } from "./routes/designs/new";

const app = express();
const db = mongoose.connection;

app.use(json());

app.use(newDesignRouter);

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
