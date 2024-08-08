const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");
const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const createTestPregnantLog = require("../../../.jest/CreateTestData/CreateTestPregnantLog.js");

let pregnantLog, users;

describe("/pregnant-log", () => {
    beforeAll(async () => {
        await createTestUser.init();
        await createTestPregnantLog.init();

        users = await createTestUser.saveTestUsers();

        pregnantLog = await createTestPregnantLog.saveTestPregnantLog();
    })

    afterAll(() => {
        mongoose.connection.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/pregnant-log")

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).get("/pregnant-log").set("authorization", `Bearer ${users.default.tokens.access_token}`)

                customExpect(res).toBeUnauthorized();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/pregnant-log").set("authorization", `Bearer ${users.admin.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/pregnant-log/${pregnantLog._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/pregnant-log/${pregnantLog._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("if pregnantLog not exist", async () => {
                const res = await request(app).get(`/pregnant-log/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all correct", async () => {
                const res = await request(app).get(`/pregnant-log/${pregnantLog._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post(`/pregnant-log`).send({
                });

                customExpect(res).toBeForbidden();
            })
            test("with no info", async () => {
                const res = await request(app).post(`/pregnant-log`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post(`/pregnant-log`).send({
                    animal_id: new mongoose.Types.ObjectId()
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/pregnant-log/${pregnantLog._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/pregnant-log/${pregnantLog._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/pregnant-log/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/pregnant-log/${pregnantLog._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/pregnant-log/${pregnantLog._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/pregnant-log/${pregnantLog._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/pregnant-log/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).delete(`/pregnant-log/${pregnantLog._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})