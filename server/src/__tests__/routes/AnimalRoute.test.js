const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");
const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const createTestChip = require("../../../.jest/CreateTestData/CreateTestChip.js");
const createTestAnimal = require("../../../.jest/CreateTestData/CreateTestAnimal.js");

let animal, users;

describe("/animal", () => {
    beforeAll(async () => {
        await createTestUser.init();
        await createTestAnimal.init();

        users = await createTestUser.saveTestUsers();

        animal = await createTestAnimal.saveTestAnimal();
    })

    afterAll(() => {
        mongoose.connection.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/animal")

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).get("/animal").set("authorization", `Bearer ${users.default.tokens.access_token}`)

                customExpect(res).toBeUnauthorized();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/animal").set("authorization", `Bearer ${users.admin.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/animal/${animal._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/animal/${animal._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("if animal not exist", async () => {
                const res = await request(app).get(`/animal/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all correct", async () => {
                const res = await request(app).get(`/animal/${animal._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post(`/animal`).send({
                    folk_id: new mongoose.Types.ObjectId(),
                });

                customExpect(res).toBeForbidden();
            })

            test("with no info", async () => {
                const res = await request(app).post(`/animal`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post(`/animal`).send({
                    folk_id: new mongoose.Types.ObjectId(),
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/animal/${animal._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/animal/${animal._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/animal/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("if all correct", async () => {
                const res = await request(app).patch(`/animal/${animal._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
        describe("/:id/add-vaccine/:vaccine_id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/animal/${animal._id}/add-vaccine/${new mongoose.Types.ObjectId()}`).send({
                    name: "Tetravalan"
                })

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).patch(`/animal/${animal._id}/add-vaccine/${new mongoose.Types.ObjectId()}`).send({
                    name: "Tetravalan"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeUnauthorized();
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/animal/${animal._id}/add-vaccine/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).patch(`/animal/${animal._id}/add-vaccine/${new mongoose.Types.ObjectId()}`).send({
                    name: "Tetravalan"
                }).set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeOk();
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/animal/${animal._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/animal/${animal._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/animal/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("if all correct", async () => {
                const res = await request(app).delete(`/animal/${animal._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})