const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");
const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const createTestCategory = require("../../../.jest/CreateTestData/CreateTestCategory.js");
const DbConnect = require("../../../.jest/dbConnection.js");

let category, users;
const dbConnect = new DbConnect();

describe("/category", () => {
    beforeAll(async () => {
        await dbConnect.connect();
        await createTestUser.init();
        await createTestCategory.init();

        users = await createTestUser.saveTestUsers();

        category = await createTestCategory.saveTestCategory();
    })

    afterAll(() => {
        dbConnect.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/category")

                customExpect(res).toBeForbidden();
            })
            test("with unauthorized token", async () => {
                const res = await request(app).get("/category").set("authorization", `Bearer ${users.default.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/category").set("authorization", `Bearer ${users.admin.tokens.access_token}`)

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/category/${category._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/category/${category._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("if category not exist", async () => {
                const res = await request(app).get(`/category/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all correct", async () => {
                const res = await request(app).get(`/category/${category._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post(`/category`).send({
                });

                customExpect(res).toBeForbidden();
            })
            test("with no info", async () => {
                const res = await request(app).post(`/category`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post(`/category`).send({
                    title: "wear earring"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/category/${category._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/category/${category._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/category/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with no info", async () => {
                const res = await request(app).patch(`/category/${category._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
            test("if all correct", async () => {
                const res = await request(app).patch(`/category/${category._id}`).send({
                    title: "wear earring"
                })
                    .set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/category/${category._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/category/${category._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/category/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).delete(`/category/${category._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})