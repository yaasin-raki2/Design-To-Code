import request from "supertest";

import { app } from "../../../index";
import { OSPlatforms } from "../../../utilities/enums";

it("Returns 400 if providing no properties", async () => {
  await request(app).post("/api/submitions").send({}).expect(400);
});

it("Returns 400 if provided invalid properties", async () => {
  await request(app)
    .post("/api/submitions")
    .send({
      userId: "",
      designName: "st",
      image: "",
      sourceCode: {
        platform: "githab",
        link: "",
      },
    })
    .expect(400);
});

it("Returns 201 if provided valid properties", async () => {
  await request(app)
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
});
