class CustomExpect {
    constructor(response) {
        this.res = response;

        expect(this.res.headers["content-type"]).toEqual(expect.stringContaining("json"));
        expect(this.res.body).toBeInstanceOf(Object);
        expect(this.res.body.message).toBeDefined();
    }
    toBeOk() {
        expect(this.res.body.success).toBeTruthy();
        expect(this.res.status).toBe(200);
    }
    toBeCreated() {
        expect(this.res.body.success).toBeTruthy();
        expect(this.res.status).toBe(201);
    }
    toBeBadRequest() {
        expect(this.res.body.success).toBeFalsy();
        expect(this.res.status).toBe(400);
    }
    toBeUnauthorized() {
        expect(this.res.body.success).toBeFalsy();
        expect(this.res.status).toBe(401);
    }
    toBeForbidden() {
        expect(this.res.body.success).toBeFalsy();
        expect(this.res.status).toBe(403);
    }
    toBeNotFound() {
        expect(this.res.body.success).toBeFalsy();
        expect(this.res.status).toBe(404);
    }
}

const customExpect = (response) => {
    return new CustomExpect(response);
}

module.exports = customExpect;