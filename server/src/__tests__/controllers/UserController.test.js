const UserController = require("../../controllers/UserController");

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

const next = jest.fn();

describe("login_test", () => {
    it("should return not found error", async () => {
        await UserController.login(mockRequest, mockResponse, next);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
    })
})