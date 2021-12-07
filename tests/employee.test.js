const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with name email and id key value pairs,", () => {
      const person = new Employee("name", 2, "test@test.com");

      expect(person.name).toEqual("name");
      expect(person.id).toEqual(2);
      expect(person.email).toEqual("test@test.com");
    });
  });
  describe("getName()", () => {
    it("should return this objects name.", () => {
      const person = new Employee("name", 2, "test@test.com");

      expect(person.getName()).toEqual("name");
    });
  });
  describe("getId()", () => {
    it("should return this objects Id.", () => {
      const person = new Employee("name", 2, "test@test.com");

      expect(person.getId()).toEqual(2);
    });
  });
  describe("getEmail()", () => {
    it("should return this objects email.", () => {
      const person = new Employee("name", 2, "test@test.com");

      expect(person.getEmail()).toEqual("test@test.com");
    });
  });
  describe("getRole()", () => {
    it("should return this objects role.", () => {
      const person = new Employee("name", 2, "test@test.com");

      expect(person.getRole()).toEqual("Employee");
    });
  });
});
