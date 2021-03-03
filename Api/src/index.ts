import express from "express";
import mongoose from "mongoose";

const app = express();
const db = mongoose.connection;

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
