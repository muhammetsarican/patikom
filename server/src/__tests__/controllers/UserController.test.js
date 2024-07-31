const UserController = require("../../controllers/UserController");
const PASSWORD_KEY = process.env;

const mockRequest = {
    body: {
        mail: "fake_mail",
        password: "fake_password"
    }
}

const mockResponse = {
    status: jest.fn(value => value),
    send: jest.fn(value => value),
}

class res {
    status(value) {
        this.status = value;
        return this;
    }
    send(message) {
        this.message = message;
        return this;
    }
}

const Res = new res();
const next = jest.fn();

describe("login_test", () => {
    beforeEach(() => {
        jest.resetModules();
        process.env.PASSWORD_KEY = PASSWORD_KEY;
    })
    it("should return not found error", async () => {
        UserController.login()(mockRequest, Res, next)

        console.log(Res.status);
        expect(Res.status).toBe(404);
    })
})