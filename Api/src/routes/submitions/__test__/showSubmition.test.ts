import request from "supertest";
import mongoose from "mongoose";

import { app } from "../../../index";
import { OSPlatforms } from "../../../utilities/enums";

it("returs 400 if provided an invalid id", async () => {
  const id = "fake id ._.";

  await request(app).get(`/api/submitions/${id}`).send({}).expect(400);
});

it("returns 404 if providing a valid id for a non existing document", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/submitions/${id}`).send({}).expect(404);
});

it("returns 200 when given valid id for an existing document", async () => {
  const response = await request(app)
    .post("/api/submitions")
    .send({
      userId: "userId",
      designName: "startup",
      image: "image",
      sourceCode: {
        platform: OSPlatforms.Github,
        link: "http://linkcode.com",
      },
    })
    .expect(201);

  await request(app).get(`/api/submitions/${response.body._id}`).send({}).expect(200);
});
