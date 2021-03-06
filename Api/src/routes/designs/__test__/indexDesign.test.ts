import request from "supertest";

import { app } from "../../../index";

const generateData = (image: string) => {
  const data = {
    name: "startup",
    colorPalette: ["red", "green"],
    difficulty: "hard",
    file: {
      link: "link",
      typeOfFile: "figma",
    },
    image,
  };

  return data;
};

it("returns 200 and an array of existing documents in db", async () => {
  const firstDesign = await request(app)
    .post("/api/designs")
    .send(generateData("first"))
    .expect(201);

  const secondDesign = await request(app)
    .post("/api/designs")
    .send(generateData("second"))
    .expect(201);

  const thirdDesign = await request(app)
    .post("/api/designs")
    .send(generateData("third"))
    .expect(201);

  const response = await request(app).get("/api/designs").send({}).expect(200);

  expect(response.body[0]).toEqual(firstDesign.body);
  expect(response.body[1]).toEqual(secondDesign.body);
  expect(response.body[2]).toEqual(thirdDesign.body);
});
