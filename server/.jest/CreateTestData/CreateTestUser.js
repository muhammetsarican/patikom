const { default: mongoose } = require("mongoose");
const HashPassword = require("../../src/helpers/HashPassword");
const { createAccessToken, createRefreshToken } = require("../../src/helpers/jwt");
const UserModel = require("../../src/models/UserModel");

class TestUser {
    constructor() {
        this.fname = "Test";
        this.lname = "User";
        this.mail = "test_user@gmail.com";
        this.password = HashPassword("test_password");
        this.status = "true";
    }

    user() {
        this._id = new mongoose.Types.ObjectId();
        this.role = "user";
        return this;
    }
    vet() {
        this._id = new mongoose.Types.ObjectId();
        this.role = "vet";
        return this;
    }
    admin() {
        this._id = new mongoose.Types.ObjectId();
        this.role = "admin";
        return this;
    }
}

const defaultUser = { ...new TestUser().user() };
const vetUser = { ...new TestUser().vet() }
const adminUser = { ...new TestUser().admin() }

const data = {
    default: {
        user: defaultUser,
        tokens: {
            access_token: createAccessToken(defaultUser),
            refresh_token: createRefreshToken(defaultUser)
        }
    },
    vet: {
        user: vetUser,
        tokens: {
            access_token: createAccessToken(vetUser),
            refresh_token: createRefreshToken(vetUser)
        }
    },
    admin: {
        user: adminUser,
        tokens: {
            access_token: createAccessToken(adminUser),
            refresh_token: createRefreshToken(adminUser)
        }
    },
}

class CreateTestUser {
    async init() {
        await UserModel.deleteMany();
    }
    async saveTestUsers() {
        await UserModel(data.default.user).save();
        await UserModel(data.vet.user).save();
        await UserModel(data.admin.user).save();

        return data;
    }
}
const createTestUser = new CreateTestUser();

module.exports = createTestUser;