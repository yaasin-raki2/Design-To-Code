import request from "supertest";
import mongoose from "mongoose";

import { app } from "../../../index";
import { OSPlatforms } from "../../../utilities/enums";

const data = {
  userId: "userId",
  designName: "startup",
  image: "image",
  sourceCode: {
    platform: OSPlatforms.Github,
    link: "http://linkcode.com",
  },
};

it("Returns 400 if provided no fields to update", async () => {
  const response = await request(app).post("/api/submitions").send(data).expect(201);

  await request(app).patch(`/api/submitions/${response.body._id}`).send({}).expect(400);
});

it("Returns 400 if provided invalid id", async () => {
  const id = "M an id hh";

  await request(app)
    .patch(`/api/submitions/${id}`)
    .send({ image: "imaaaaaaage" })
    .expect(400);
});

it("Returns 404 if tries to update a non existing document, (aka valid id but does't exist)", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .patch(`/api/submitions/${id}`)
    .send({ image: "imaaaaaaaaage" })
    .expect(404);
});

it("returns 200 if provided a valid id of an existing document with fields to update", async () => {
  const response = await request(app).post("/api/submitions").send(data).expect(201);

  const image = "imaaaaaaaaaaaaaage";

  const updatedRresponse = await request(app)
    .patch(`/api/submitions/${response.body._id}`)
    .send({ image })
    .expect(200);

  expect(updatedRresponse.body.userId).toEqual(data.userId);
  expect(updatedRresponse.body.designName).toEqual(data.designName);
  expect(updatedRresponse.body.sourceCode).toEqual(data.sourceCode);
  expect(updatedRresponse.body.image).not.toEqual(data.image);
  expect(updatedRresponse.body.image).toEqual(image);
});
