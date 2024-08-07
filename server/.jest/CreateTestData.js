const { default: mongoose } = require("mongoose");
const HashPassword = require("../src/helpers/HashPassword");

const UserModel = require("../src/models/UserModel");
const VaccineModel = require("../src/models/VaccineModel");
const { createAccessToken, createRefreshToken } = require("../src/helpers/jwt");

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

const TestData = {
    user: new TestUser(),
    vaccine: {
        _id: new mongoose.Types.ObjectId(),
        name: "Tetravalan",
        status: "true"
    }
}

class CreateTestData {
    async init() {
        await UserModel.deleteMany();
        return this;
    }
    async user() {
        const user = { ...TestData.user.user() };

        await UserModel(user).save();

        return {
            user: user,
            tokens: {
                access_token: createAccessToken(user),
                refresh_token: createRefreshToken(user)
            }
        }
    }
    async vet() {
        const user = { ...TestData.user.vet() };

        await UserModel(user).save();

        return {
            user: user,
            tokens: {
                access_token: createAccessToken(user),
                refresh_token: createRefreshToken(user)
            }
        }
    }

    async admin() {
        const user = { ...TestData.user.admin() };

        await UserModel(user).save();

        return {
            user: user,
            tokens: {
                access_token: createAccessToken(user),
                refresh_token: createRefreshToken(user)
            }
        }
    }
}

module.exports = new CreateTestData();