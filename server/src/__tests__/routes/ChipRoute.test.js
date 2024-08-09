const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");
const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const createTestChip = require("../../../.jest/CreateTestData/CreateTestChip.js");
const DbConnect = require("../../../.jest/dbConnection.js");

let chip, users;
const dbConnect = new DbConnect();

describe("/chip", () => {
    beforeAll(async () => {
        await dbConnect.connect();
        await createTestUser.init();
        await createTestChip.init();

        users = await createTestUser.saveTestUsers();

        chip = await createTestChip.saveTestChip();
    })

    afterAll(() => {
        dbConnect.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/chip")

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).get("/chip").set("authorization", `Bearer ${users.default.tokens.access_token}`)

                customExpect(res).toBeUnauthorized();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/chip").set("authorization", `Bearer ${users.vet.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/chip/${chip._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/chip/${chip._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("if chip not exist", async () => {
                const res = await request(app).get(`/chip/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all parameters are true", async () => {
                const res = await request(app).get(`/chip/${chip._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post(`/chip`).send({
                    user_id: users.default.user._id,
                    animal_id: new mongoose.Types.ObjectId(),
                    code: "123123123"
                });

                customExpect(res).toBeForbidden();
            })

            test("with no info", async () => {
                const res = await request(app).post(`/chip`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if user_id and code field both missing", async () => {
                const res = await request(app).post(`/chip`).send({
                    animal_id: new mongoose.Types.ObjectId()
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if user_id and animal id both missing", async () => {
                const res = await request(app).post(`/chip`).send({
                    code: "123123123"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if animal id and code field both missing", async () => {
                const res = await request(app).post(`/chip`).send({
                    user_id: users.default.user._id
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if code field missing", async () => {
                const res = await request(app).post(`/chip`).send({
                    user_id: users.default.user._id,
                    animal_id: new mongoose.Types.ObjectId()
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if user id missing", async () => {
                const res = await request(app).post(`/chip`).send({
                    animal_id: new mongoose.Types.ObjectId(),
                    code: "123123123"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if animal id missing", async () => {
                const res = await request(app).post(`/chip`).send({
                    user_id: users.default.user._id,
                    code: "123123123"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post(`/chip`).send({
                    user_id: users.default.user._id,
                    animal_id: new mongoose.Types.ObjectId(),
                    code: "123123123"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/chip/${chip._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/chip/${chip._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/chip/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/chip/${chip._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/chip/${chip._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/chip/${chip._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/chip/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).delete(`/chip/${chip._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})