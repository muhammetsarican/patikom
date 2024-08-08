const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");
const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const createTestFolk = require("../../../.jest/CreateTestData/CreateTestFolk.js");

let folk, users;

describe("/folk", () => {
    beforeAll(async () => {
        await createTestUser.init();
        await createTestFolk.init();

        users = await createTestUser.saveTestUsers();

        folk = await createTestFolk.saveTestFolk();
    })

    afterAll(() => {
        mongoose.connection.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/folk")

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).get("/folk").set("authorization", `Bearer ${users.default.tokens.access_token}`)

                customExpect(res).toBeUnauthorized();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/folk").set("authorization", `Bearer ${users.admin.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/folk/${folk._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/folk/${folk._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("if folk not exist", async () => {
                const res = await request(app).get(`/folk/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all correct", async () => {
                const res = await request(app).get(`/folk/${folk._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post(`/folk`).send({
                });

                customExpect(res).toBeForbidden();
            })
            test("with no info", async () => {
                const res = await request(app).post(`/folk`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post(`/folk`).send({
                    genre_id: new mongoose.Types.ObjectId(),
                    name: "Golden Retriever"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/folk/${folk._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/folk/${folk._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/folk/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/folk/${folk._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/folk/${folk._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/folk/${folk._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/folk/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).delete(`/folk/${folk._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})