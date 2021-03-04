import request from "supertest";

import { app } from "../../../index";
import { DifficultyLevels, FileTypes } from "../../../utilities/enums";

it("Returns 404 if trying to access an aknown route", async () => {
  await request(app).post("/api/idk").send({}).expect(404);
});

it("Returns 400 if providing no properties", async () => {
  await request(app).post("/api/designs").send({}).expect(400);
});

it("Returns 400 if provided invalid properties", async () => {
  await request(app)
    .post("/api/designs")
    .send({
      colorPalette: ["red"],
      difficulty: "Haard",
      file: {
        link: "",
        typeOfFile: "figmaa",
      },
      image: "",
    })
    .expect(400);
});

it("Returns 201 if provided valid properties", async () => {
  await request(app)
    .post("/api/designs")
    .send({
      colorPalette: ["red", "yellow", "#23A4B3"],
      difficulty: DifficultyLevels.Hard,
      file: {
        link: "http://linkfile.com",
        typeOfFile: FileTypes.AdobeXD,
      },
      image: "image",
    })
    .expect(201);
});
