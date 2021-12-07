const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with name email and id key value pairs,", () => {
      const person = new Manager("name", 2, "test@test.com", 3);

      expect(person instanceof Employee);
      expect(person.officeNumber).toEqual(3);
    });
  });
  describe("getRole()", () => {
    it("should return this objects role.", () => {
      const person = new Manager("name", 2, "test@test.com", 3);

      expect(person.getRole()).toEqual("Manager");
    });
  });
  describe("getOfficeNumber()", () => {
    it("should return this objects office number.", () => {
      const person = new Manager("name", 2, "test@test.com", 3);

      expect(person.getOfficeNumber()).toEqual(3);
    });
  });
});
