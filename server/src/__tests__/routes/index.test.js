const app = require("../../app.js");
const request = require("supertest");
const customExpect = require("../../../.jest/CustomExpect.js");

describe("base_test", () => {
    test("welcome msg test", async () => {
        const response = await request(app).get("/")
        customExpect(response).toBeOk();
    })
})