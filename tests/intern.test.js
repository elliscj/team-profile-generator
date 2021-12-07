const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name email id and school key value pairs,", () => {
      const person = new Intern("name", 2, "test@test.com", "DU");

      expect(person instanceof Employee);
      expect(person.school).toEqual("DU");
    });
  });
  describe("getRole()", () => {
    it("should return this objects role.", () => {
      const person = new Intern("name", 2, "test@test.com", "DU");

      expect(person.getRole()).toEqual("Intern");
    });
  });
  describe("getSchool()", () => {
    it("should return this objects school.", () => {
      const person = new Intern("name", 2, "test@test.com", "DU");

      expect(person.getSchool()).toEqual("DU");
    });
  });
});
