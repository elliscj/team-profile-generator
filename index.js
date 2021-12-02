const fs = require("fs");
const inquirer = require("inquirer");
const writeToFile = require("./src/template.js");

const questions = [
  {
    type: "input",
    message: "What is your employees name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your employees ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your employees email address?",
    name: "email",
  },
  {
    type: "list",
    message: "What is your employees role?",
    choices: ["Intern", "Engineer", "Manager"],
    name: "role",
  },
];

function init() {
  inquirer.prompt(questions).then((data) =>
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your office number?",
          name: "officeNumber",
          when: function () {
            return data.role === "Manager";
          },
        },
        {
          type: "input",
          message: "What is your Git Hub username?",
          name: "gitHubUserName",
          when: function () {
            return data.role === "Engineer";
          },
        },
        {
          type: "input",
          message: "What school are you attending?",
          name: "school",
          when: function () {
            return data.role === "Intern";
          },
        },
      ])
      .then(({ officeNumber, gitHubUserName, school }) => {
        fs.writeFile(
          "index.html",
          writeToFile(data, officeNumber, gitHubUserName, school),
          (err) => {
            err ? console.log(err) : console.log("html file is ready!");
          }
        );
      })
  );
}

// Function call to initialize app
init();
