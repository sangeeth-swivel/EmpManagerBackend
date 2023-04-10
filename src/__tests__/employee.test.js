import { describe, it } from "node:test";

describe("employee", () => {
  describe("fetch all the employee", () => {
    it("should contain an object named employees in the body", async () => {
      const getEmployeeMockService = jest
      .spyOn(employeeService, "getAllEmployeesService")
      .mockReturnValue({});
      const { statusCode, body } = await supertest(app)
        .get("/employee")
        .set("Accept", "application/json");
      expect(statusCode).toBe(200);
      expect(body).toHaveProperty("employees");
    });
  });
});