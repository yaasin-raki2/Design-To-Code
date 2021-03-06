import request from "supertest";
import mongoose from "mongoose";

import { app } from "../../../index";

const data = {
  name: "startup",
  colorPalette: ["red", "green"],
  difficulty: "hard",
  file: {
    link: "link",
    typeOfFile: "figma",
  },
  image: "image",
};

it("Returns 400 if provided no fields to update", async () => {
  const response = await request(app).post("/api/designs").send(data).expect(201);

  await request(app).patch(`/api/designs/${response.body._id}`).send({}).expect(400);
});

it("Returns 400 if provided invalid id", async () => {
  const id = "M an id hh";

  await request(app)
    .patch(`/api/designs/${id}`)
    .send({ image: "imaaaaaaage" })
    .expect(400);
});

it("Returns 404 if tries to update a non existing document, (aka valid id but does't exist)", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .patch(`/api/designs/${id}`)
    .send({ image: "imaaaaaaaaage" })
    .expect(404);
});

it("returns 200 if provided a valid id of an existing document with fields to update", async () => {
  const response = await request(app).post("/api/designs").send(data).expect(201);

  const image = "imaaaaaaaaaaaaaage";

  const updatedRresponse = await request(app)
    .patch(`/api/designs/${response.body._id}`)
    .send({ image })
    .expect(200);

  expect(updatedRresponse.body.colorPalette).toEqual(data.colorPalette);
  expect(updatedRresponse.body.difficulty).toEqual(data.difficulty);
  expect(updatedRresponse.body.file).toEqual(data.file);
  expect(updatedRresponse.body.image).not.toEqual(data.image);
  expect(updatedRresponse.body.image).toEqual(image);
});
