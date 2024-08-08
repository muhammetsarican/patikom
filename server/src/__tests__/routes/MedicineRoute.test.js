const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");
const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const createTestMedicine = require("../../../.jest/CreateTestData/CreateTestMedicine.js");

let medicine, users;

describe("/medicine", () => {
    beforeAll(async () => {
        await createTestUser.init();
        await createTestMedicine.init();

        users = await createTestUser.saveTestUsers();

        medicine = await createTestMedicine.saveTestMedicine();
    })

    afterAll(() => {
        mongoose.connection.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/medicine")

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).get("/medicine").set("authorization", `Bearer ${users.default.tokens.access_token}`)

                customExpect(res).toBeUnauthorized();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/medicine").set("authorization", `Bearer ${users.admin.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/medicine/${medicine._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/medicine/${medicine._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("if medicine not exist", async () => {
                const res = await request(app).get(`/medicine/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all correct", async () => {
                const res = await request(app).get(`/medicine/${medicine._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post(`/medicine`).send({
                });

                customExpect(res).toBeForbidden();
            })
            test("with no info", async () => {
                const res = await request(app).post(`/medicine`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post(`/medicine`).send({
                    name: "wear earring"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/medicine/${medicine._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/medicine/${medicine._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/medicine/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/medicine/${medicine._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
            test("if all correct", async () => {
                const res = await request(app).patch(`/medicine/${medicine._id}`).send({
                    name: "wear earring"
                })
                    .set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/medicine/${medicine._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/medicine/${medicine._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/medicine/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).delete(`/medicine/${medicine._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})