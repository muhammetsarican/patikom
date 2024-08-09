const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");
const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const createTestGenre = require("../../../.jest/CreateTestData/CreateTestGenre.js");
const DbConnect = require("../../../.jest/dbConnection.js");

let genre, users;
const dbConnect = new DbConnect();

describe("/genre", () => {
    beforeAll(async () => {
        await dbConnect.connect();
        await createTestUser.init();
        await createTestGenre.init();

        users = await createTestUser.saveTestUsers();

        genre = await createTestGenre.saveTestGenre();
    })

    afterAll(() => {
        dbConnect.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/genre")

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).get("/genre").set("authorization", `Bearer ${users.default.tokens.access_token}`)

                customExpect(res).toBeUnauthorized();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/genre").set("authorization", `Bearer ${users.vet.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/genre/${genre._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/genre/${genre._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).get(`/genre/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeUnauthorized();
            })
            test("if genre not exist", async () => {
                const res = await request(app).get(`/genre/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all correct", async () => {
                const res = await request(app).get(`/genre/${genre._id}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post(`/genre`).send({
                });

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).post(`/genre`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeUnauthorized();
            })
            test("with no info", async () => {
                const res = await request(app).post(`/genre`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post(`/genre`).send({
                    name: "cat"
                }).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/genre/${genre._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).patch(`/genre/${genre._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeUnauthorized()
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/genre/${genre._id}z`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/genre/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/genre/${genre._id}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/genre/${genre._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).delete(`/genre/${genre._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeUnauthorized()
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/genre/${genre._id}z`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/genre/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).delete(`/genre/${genre._id}`).set("authorization", `Bearer ${users.vet.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})