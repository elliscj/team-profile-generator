const fs = require("fs");

function writeToFile(data, officeNumber, gitHubUserName, school) {
  return `${data.name},${data.id},${data.email},${data.role}`;
}

// template literal for all employees. use for each loop to iterate through the array of objects (employees). assign that to a variable (const literal1 = ``), and then use that variable to insert into a template literal for the whole html template literal ${literal1}...?????

module.exports = writeToFile;
