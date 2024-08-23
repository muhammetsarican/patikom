const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");
const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const createTestTreatment = require("../../../.jest/CreateTestData/CreateTestTreatment.js");
const DbConnect = require("../../../.jest/dbConnection.js");

let treatment, users;
const dbConnect = new DbConnect();

describe("/treatment", () => {
    beforeAll(async () => {
        await dbConnect.connect();
        await createTestUser.init();
        await createTestTreatment.init();

        users = await createTestUser.saveTestUsers();

        treatment = await createTestTreatment.saveTestTreatment();
    })

    afterAll(() => {
        dbConnect.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/treatment")

                customExpect(res).toBeForbidden();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/treatment").set("authorization", `Bearer ${users.admin.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/treatment/${treatment._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/treatment/${treatment._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("if treatment not exist", async () => {
                const res = await request(app).get(`/treatment/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all correct", async () => {
                const res = await request(app).get(`/treatment/${treatment._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post(`/treatment`).send({
                });

                customExpect(res).toBeForbidden();
            })
            test("with no info", async () => {
                const res = await request(app).post(`/treatment`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post(`/treatment`).send({
                    title: "pregnant check",
                    animal_id: new mongoose.Types.ObjectId()
                }).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/treatment/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("if all correct", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
        describe("/:id/add-category/:category_id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}/add-category/${new mongoose.Types.ObjectId()}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}z/add-category/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with unauthorized token", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}/add-category/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeUnauthorized()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/treatment/${new mongoose.Types.ObjectId()}/add-category/${new mongoose.Types.ObjectId()}`).send({
                    title: "cure"
                }).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}/add-category/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("if all correct", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}/add-category/${new mongoose.Types.ObjectId()}`).send({
                    title: "cure"
                }).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
        describe("/:id/add-medicine/:medicine_id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}/add-medicine/${new mongoose.Types.ObjectId()}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}z/add-medicine/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with unauthorized token", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}/add-medicine/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeUnauthorized()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/treatment/${new mongoose.Types.ObjectId()}/add-medicine/${new mongoose.Types.ObjectId()}`).send({
                    name: "enrolen"
                }).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}/add-medicine/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("if all correct", async () => {
                const res = await request(app).patch(`/treatment/${treatment._id}/add-medicine/${new mongoose.Types.ObjectId()}`).send({
                    name: "enrolen"
                }).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/treatment/${treatment._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/treatment/${treatment._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/treatment/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).delete(`/treatment/${treatment._id}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})