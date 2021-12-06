const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const renderTempLiteral = require("./src/template.js");
const renderCard = require("./src/template.js");
const htmlTemplate = require("htmlTemplate");

let employees = [];

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

function init(questions) {
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
        console.log(officeNumber, gitHubUserName, school, data);
        if (officeNumber) {
          let newManager = new Manager(
            data.name,
            data.id,
            data.email,
            officeNumber
          );
          employees.push(newManager);
        }
        if (gitHubUserName) {
          let newEngineer = new Engineer(
            data.name,
            data.id,
            data.email,
            gitHubUserName
          );
          employees.push(newEngineer);
        }
        if (school) {
          let newIntern = new Intern(data.name, data.id, data.email, school);
          employees.push(newIntern);
        }
        inquirer
          .prompt({
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"],
            name: "addAnother",
          })
          .then(({ addAnother }) => {
            if (addAnother === "Yes") {
              init(questions);
            } else {
              fs.writeFile("./dist/index.html", htmlTemplate, (err) => {
                err ? console.log(err) : console.log("html file is ready!");
              });
              console.log(employees);
            }
          });
      })
  );
}

// Function call to initialize app
init(questions);
