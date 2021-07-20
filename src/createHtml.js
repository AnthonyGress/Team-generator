const fs = require("fs");
const path = require("path");
const createCss = require("./createCss");
let cardArr = [];
let cardFill = "";
// create a new card
class Card {
  constructor(content) {
    this.content = content;
  }
}
// determine the role specific data title and value
const getSpec = (e) => {
  let specTitle, specVal, iconA, iconB;
  if (e.getRole() == "Manager") {
    specTitle = "Office";
    specVal = e.officeNumber;
    iconA = '<i class="bi bi-kanban-fill"></i>';
    iconB = '<i class="bi bi-telephone-fill"></i>';
  } 
  else if (e.getRole() == "Engineer") {
    specTitle = "GitHub";
    specVal = `<a href="https://github.com/${e.github}" target="_blank">${e.github}</a>`;
    iconA = '<i class="bi bi-rulers"></i>';
    iconB = '<i class="bi bi-github"></i>';
  } 
  else {
    specTitle = "School";
    specVal = e.school;
    iconA = '<i class="bi bi-eyeglasses"></i>';
    iconB = '<i class="bi bi-book-fill"></i>';
  }
   let spec = {
     title: specTitle,
     value: specVal,
     iconA: iconA,
     iconB: iconB
   };
  return spec;
};
// take data from user for all employees and make bootstrap cards for each one
const createCards = (emp) => {
  console.log("\nCreating Employee Cards");
  emp.forEach((e) => {
    // create a card for each person
    let card = `<div class="col mt-4 d-flex justify-content-center">
        <div class="card h-100" style="width: 19rem">
          <div class="card-header bg-success">
            <h5 class="card-title">${e.name}</h5>
            <h6 class="card-subtitle mb-2">${
              getSpec(e).iconA
            } ${e.getRole()}</h6>
          </div>
          <div class="card-body d-flex align-items-center">

            <p class="card-text">
              <table class="table table-striped table-bordered">
                <tr>
                  <th scope="col"><i class="bi bi-person-badge-fill"></i> ID</th>
                  <td>${e.id}</td>
                </tr>
                <tr>
                  <th scope="col"><i class="bi bi-envelope-fill"></i> Email</th>
                  <td><a href="mailto:${e.email}">${e.email}</a></td>
                </tr>
                <tr>
                  <th scope="col">${getSpec(e).iconB} ${getSpec(e).title}</th>
                  <td>${getSpec(e).value}</td>
                </tr>
              </table>
            </p>
          </div>
        </div>
      </div> `;
      // use constructor and add the data to the array
    cardArr.push(new Card(card));
  });
  // loop over array and grab just the html text
  cardArr.forEach((e) => (cardFill += e.content));
  // pass html text only to createHtml
  createHtml(cardFill);
  // write to file using array
};
// shell of html without any data
const createHtml = (data) => {
  let content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
  </head>
  <body>
    <header class="jumbotron bg-success p-3"><h1 class="text-center">My Team</h1></header>
    <main class="container main-wrapper">
      <div class="row">
      ${data}
      </div>
    </main>
  <footer class="bg-success text-center py-4 h5">Built by Anthony</footer>
  </body>
</html>

  `;
  // append to html file
  writeToFile("index.html", content);
  writeToFile("style.css", createCss.styling());
};



// export html and css files (use bootstrap) using path and fs
const writeToFile = (fileName, content) => {
  console.log("\nAdding the bells and whistles");
  // TODO change file path
  fs.writeFileSync(path.join(process.cwd(),'/dist/', fileName), content);
  console.log("\nFile written to " + path.join(process.cwd(), "/dist/", fileName) + "\n");
};

module.exports = createCards;