const fs = require("fs");

function renderTempLiteral(employees) {
  console.log(employees[0].getName());
  console.log(employees);
  //call getRole and do if statement
  // if role is manager
}

// template literal for all employees. use for each loop to iterate through the array of objects (employees). assign that to a variable (const literal1 = ``), and then use that variable to insert into a template literal for the whole html template literal ${literal1}...?????

module.exports = renderTempLiteral;
