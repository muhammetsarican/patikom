const request = require("supertest");
const app = require("../../app.js");
const { default: mongoose } = require("mongoose");

const customExpect = require("../../../.jest/CustomExpect.js");
const createTestUser = require("../../../.jest/CreateTestData/CreateTestUser.js");
const DbConnect = require("../../../.jest/dbConnection.js");

let users;
const dbConnect = new DbConnect();

describe("/user", () => {
    beforeAll(async () => {
        await dbConnect.connect();
        await createTestUser.init();

        users = await createTestUser.saveTestUsers();
    })

    afterAll(() => {
        dbConnect.close();
    })

    describe("GET", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).get("/user");

                customExpect(res).toBeForbidden();
            })
            test("with not authorized token", async () => {
                const res = await request(app).get("/user").set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk();
            })
            test("with authorized token", async () => {
                const res = await request(app).get("/user").set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeOk();
            })
        })
        describe("/:id", () => {
            test("without token", async () => {
                const res = await request(app).get(`/user/${users.default.user._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).get(`/user/${users.default.user._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeBadRequest();
            })
            test("if user not exist", async () => {
                const res = await request(app).get(`/user/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeNotFound();
            })
            test("if all parameters are true", async () => {
                const res = await request(app).get(`/user/${users.default.user._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeOk();
            })
        })
    })
    describe("POST", () => {
        describe("/", () => {
            test("without token", async () => {
                const res = await request(app).post("/user").send({
                    mail: "test_user@gmail.com",
                    password: "test_password"
                });

                customExpect(res).toBeForbidden();
            })
            test("with not authorized token", async () => {
                const res = await request(app).post("/user").send({
                    mail: "test_user@gmail.com",
                    password: "test_password"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);;

                customExpect(res).toBeUnauthorized();
            })

            test("with no info", async () => {
                const res = await request(app).post("/user").set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if password missing", async () => {
                const res = await request(app).post("/user").send({
                    mail: "test_user@gmail.com",
                }).set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
            test("if mail missing", async () => {
                const res = await request(app).post("/user").send({
                    password: "test_password",
                }).set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if mail not valid", async () => {
                const res = await request(app).post("/user").send({
                    mail: "test@gmail",
                    password: "test_password",
                }).set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if password less than 8 characters", async () => {
                const res = await request(app).post("/user").send({
                    mail: "test_user@gmail.com",
                    password: "test123",
                }).set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if all correct", async () => {
                const res = await request(app).post("/user").send({
                    mail: "test_user@gmail.com",
                    password: "test_password",
                }).set("authorization", `Bearer ${users.admin.tokens.access_token}`);

                customExpect(res).toBeCreated();
            })
        })
        describe("/login", () => {
            test("if password missing", async () => {
                const res = await request(app).post("/user/login").send({
                    mail: "test_user@gmail.com",
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if mail missing", async () => {
                const res = await request(app).post("/user/login").send({
                    password: "test_password",
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if mail is wrong", async () => {
                const res = await request(app).post("/user/login").send({
                    mail: "test123@gmail.com",
                    password: "test_password"
                })

                customExpect(res).toBeBadRequest();
            })
            test("if password is wrong", async () => {
                const res = await request(app).post("/user/login").send({
                    mail: "test_user@gmail.com",
                    password: "test123321"
                })

                customExpect(res).toBeBadRequest();
            })
            test("if mail not valid", async () => {
                const res = await request(app).post("/user/login").send({
                    mail: "test@gmail",
                    password: "test_password",
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if password less than 8 characters", async () => {
                const res = await request(app).post("/user/login").send({
                    mail: "test_user@gmail.com",
                    password: "test123",
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest();
            })
            test("if mail and password exist", async () => {
                const res = await request(app).post("/user/login").send({
                    mail: "test_user@gmail.com",
                    password: "test_password",
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk();
            })
        })

        describe("/register", () => {
            test("if mail and password are missing", async () => {
                const res = await request(app).post("/user/register")

                customExpect(res).toBeBadRequest();
            })
            test("if mail is missing", async () => {
                const res = await request(app).post("/user/register").send({
                    password: "test_password"
                })

                customExpect(res).toBeBadRequest();
            })
            test("if password is missing", async () => {
                const res = await request(app).post("/user/register").send({
                    mail: "test_user@gmail.com"
                })

                customExpect(res).toBeBadRequest();
            })
            test("if password is not be 8 character", async () => {
                const res = await request(app).post("/user/register").send({
                    mail: "test_user@gmail.com",
                    password: "test123"
                })

                customExpect(res).toBeBadRequest();
            })
            test("if mail is not valid", async () => {
                const res = await request(app).post("/user/register").send({
                    mail: "test@gmail",
                    password: "test_password"
                })

                customExpect(res).toBeBadRequest();
            })
            test("if mail and password are valid", async () => {
                const res = await request(app).post("/user/register").send({
                    mail: "test_user@gmail.com",
                    password: "test_password"
                });

                customExpect(res).toBeCreated();
            })
        })
        describe("/:id/change-role", () => {
            test("with no token", async () => {
                const res = await request(app).post(`/user/${users.default.user._id}/change-role`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).post(`/user/${users.default.user._id}z/change-role`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with no info", async () => {
                const res = await request(app).post(`/user/${users.default.user._id}/change-role`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).post(`/user/${new mongoose.Types.ObjectId()}/change-role`).send({
                    name: "vet"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("with incorrect value", async () => {
                const res = await request(app).post(`/user/${users.default.user._id}/change-role`).send({
                    title: "vet"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("all correct", async () => {
                const res = await request(app).post(`/user/${users.default.user._id}/change-role`).send({
                    name: "vet"
                }).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("PATCH", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).patch(`/user/${users.default.user._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).patch(`/user/${users.default.user._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).patch(`/user/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).patch(`/user/${users.default.user._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
    describe("DELETE", () => {
        describe("/:id", () => {
            test("with no token", async () => {
                const res = await request(app).delete(`/user/${users.default.user._id}`);

                customExpect(res).toBeForbidden();
            })
            test("with invalid id", async () => {
                const res = await request(app).delete(`/user/${users.default.user._id}z`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeBadRequest()
            })
            test("with not recorded id", async () => {
                const res = await request(app).delete(`/user/${new mongoose.Types.ObjectId()}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeNotFound()
            })
            test("all things are correct", async () => {
                const res = await request(app).delete(`/user/${users.default.user._id}`).set("authorization", `Bearer ${users.default.tokens.access_token}`);

                customExpect(res).toBeOk()
            })
        })
    })
})