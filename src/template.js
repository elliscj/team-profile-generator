const fs = require("fs");
const Engineer = require("../lib/engineer");
let htmlTemplate = ``;

function renderTempLiteral(employees) {
  htmlTemplate += `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Meet The Team</title>
  </head>
  <body>
    <header class="header">
      <h1>Meet The Team!</h1>
    </header>
    <div class="container row">`;
  for (let i = 0; i < employees.length; i++) {
    htmlTemplate += `<div class="card col-sm-8 col-md-4">
    <div class="card-body">
       <h5 class="card-title">${employees[i].name}</h5>
       <p class="card-text">${employees[i].getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item id">ID: ${employees[i].id}</li>
      <li class="list-group-item email">Email: <a href = "mailto: ${
        employees[i].email
      }">${employees[i].email}</a></li>`;
    if (employees[i].getRole() === "Engineer") {
      htmlTemplate += `<li class="list-group-item special">GitHub: <a href = "https://github.com/${employees[i].gitHubUserName}" target="_blank">${employees[i].gitHubUserName}</a></li>
    </ul>
    </div>`;
    } else if (employees[i].getRole() === "Intern") {
      htmlTemplate += `<li class="list-group-item special">School: ${employees[i].school}</li>
    </ul>
    </div>`;
    } else if (employees[i].getRole() === "Manager") {
      htmlTemplate += `<li class="list-group-item special">Office: ${employees[i].officeNumber}</li>
    </ul>
    </div>`;
    }
  }
  htmlTemplate += `</div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;

  return htmlTemplate;

  // `${employees
  //     .map((employee) => {
  //       return `<div class="card col-sm-8 col-md-4">
  //     <div class="card-body">
  //        <h5 class="card-title">${employee.name}</h5>
  //        <p class="card-text">${employee.getRole()}</p>
  //     </div>
  //     <ul class="list-group list-group-flush">
  //       <li class="list-group-item id">ID: ${employee.id}</li>
  //       <li class="list-group-item email">Email: <a href = "mailto: ${
  //         employee.email
  //       }">${employee.email}</a></li>
  //       <li class="list-group-item special">${employee.getRole()}</li>
  //     </ul>
  //     </div>`;
  //     })
  //     .join("")}
  //     </div>
  //     <script
  //       src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  //       integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
  //       crossorigin="anonymous"
  //     ></script>
  //   </body>
  // </html>`;

  //call getRole and do if statement
  // if role is manager
}

// template literal for all employees. use for each loop to iterate through the array of objects (employees). assign that to a variable (const literal1 = ), and then use that variable to insert into a template literal for the whole html template literal ${literal1}...?????

module.exports = renderTempLiteral;
// module.exports = htmlTemplate;

//// card template /////
{
  /* <div class="card col-sm-8 col-md-4">
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <p class="card-text">Role</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID</li>
    <li class="list-group-item">Email</li>
    <li class="list-group-item">Office/Git/School</li>
  </ul>
</div> */
}

// function renderCard(employees) {
//   console.log(employees[1].name);
//   console.log(employees.length);
//   employees.map((employee) => {
//     return `<div class="card col-sm-8 col-md-4">
//     <div class="card-body">
//       <h5 class="card-title">${employee.name}</h5>
//        <p class="card-text">${employee.getRole()}</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item id">${employee.id}</li>
//       <li class="list-group-item email">${employee.email}</li>
//       <li class="list-group-item special">${employee.getRole()}</li>
//     </ul>
//   </div>`;
//   });
//   // for (let i = 0; i < employees.length; i++) {
//   //   console.log(employees[i].name);
//   //   //     return `<div class="card col-sm-8 col-md-4">
//   //   //   <div class="card-body">
//   //   //     <h5 class="card-title">${employees[i].name}</h5>
//   //   //     <p class="card-text">${employees[i].getRole()}</p>
//   //   //   </div>
//   //   //   <ul class="list-group list-group-flush">
//   //   //     <li class="list-group-item">${employees[i].id}</li>
//   //   //     <li class="list-group-item">${employees[i].email}</li>
//   //   //     <li class="list-group-item">${employees[i].getRole()}</li>
//   //   //   </ul>
//   //   // </div>`;
//   // }
// }
