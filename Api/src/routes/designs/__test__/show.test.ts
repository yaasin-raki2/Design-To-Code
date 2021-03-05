import request from "supertest";
import mongoose from "mongoose";

import { app } from "../../../index";

it("returs 400 if provided an invalid id", async () => {
  const id = "fake id ._.";

  await request(app).get(`/api/designs/${id}`).send({}).expect(400);
});

it("returns 404 if providing a valid id for a non existing document", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/designs/${id}`).send({}).expect(404);
});

it("returns 200 when given valid id for an existing document", async () => {
  const response = await request(app)
    .post("/api/designs")
    .send({
      colorPalette: ["red", "green"],
      difficulty: "hard",
      file: {
        link: "link",
        typeOfFile: "figma",
      },
      image: "image",
    })
    .expect(201);

  await request(app).get(`/api/designs/${response.body._id}`).send({}).expect(200);
});
