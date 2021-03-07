import request from "supertest";

import { app } from "../../../index";
import { OSPlatforms } from "../../../utilities/enums";

const generateData = (image: string) => {
  const data = {
    userId: "userId",
    designName: "startup",
    image,
    sourceCode: {
      platform: OSPlatforms.Github,
      link: "http://linkcode.com",
    },
  };

  return data;
};

it("returns 200 and an array of existing documents in db", async () => {
  const firstSubmition = await request(app)
    .post("/api/submitions")
    .send(generateData("first"))
    .expect(201);

  const secondSubmition = await request(app)
    .post("/api/submitions")
    .send(generateData("second"))
    .expect(201);

  const thirdSubmition = await request(app)
    .post("/api/submitions")
    .send(generateData("third"))
    .expect(201);

  const response = await request(app).get("/api/submitions").send({}).expect(200);

  expect(response.body[0]).toEqual(firstSubmition.body);
  expect(response.body[1]).toEqual(secondSubmition.body);
  expect(response.body[2]).toEqual(thirdSubmition.body);
});
