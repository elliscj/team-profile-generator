const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name email id and github key value pairs,", () => {
      const person = new Engineer("name", 2, "test@test.com", "github");

      expect(person instanceof Employee);
      expect(person.gitHubUserName).toEqual("github");
    });
  });
  describe("getRole()", () => {
    it("should return this objects role.", () => {
      const person = new Engineer("name", 2, "test@test.com", "github");

      expect(person.getRole()).toEqual("Engineer");
    });
  });
  describe("getGitHub()", () => {
    it("should return this objects github.", () => {
      const person = new Engineer("name", 2, "test@test.com", "github");

      expect(person.getGitHub()).toEqual("github");
    });
  });
});
