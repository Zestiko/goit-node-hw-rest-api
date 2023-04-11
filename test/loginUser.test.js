const request = require("supertest");
const app = require('../app')

describe("POST /api/users/login", () => {
  it("should return user and token", async () => {
    const testData = {
      email: "Zestiko003@example.com",
      password: "Zestbuss123!!",
    };

    const res = await request(app).post("/api/users/login").send(testData);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.user).toHaveProperty("email");
    expect(typeof res.body.user.email).toBe("string");
    expect(res.body.user).toHaveProperty("subscription");
    expect(typeof res.body.user.subscription).toBe("string");
  });
});