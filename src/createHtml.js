const fs = require("fs");
const path = require("path");
let cardArr = [];
let cardFill = "";

class Card {
  constructor(content) {
    this.content = content;
  }
}


const getSpec = (e) => {
  let specTitle, specVal;
  console.log(e);
  let spec = {
    title: specTitle,
    value: specVal,
  };
  console.log(e.getRole());
  if (e.getRole() == "Manager") {
    specTitle = "Office Number";
    specVal = e.office;
  } 
  else if (e.getRole() == "Engineer") {
    specTitle = "GitHub";
    specVal = e.github;
  } 
  else {
    specTitle = "School";
    specVal = e.school;
  }
  return spec;
};

const createCards = (emp) => {
  console.log("creating cards");
  console.log(emp);
  emp.forEach((e) => {
    // create a card for each person and add it to the section
    let card = `<div class="col">
        <div class="card" style="width: 18rem">
          <div class="card-header bg-success">
            <h5 class="card-title text-light">${e.name}</h5>
            <h6 class="card-subtitle mb-2 text-light">${e.getRole()}</h6>
          </div>
          <div class="card-body">

            <p class="card-text">
              <table class="table table-striped table-bordered">
                <tr>
                  <th scope="col">ID</th>
                  <td>${e.id}</td>
                </tr>
                <tr>
                  <th scope="col">Email</th>
                  <td>${e.email}</td>
                </tr>
                <tr>
                  <th scope="col">${getSpec(e).title}</th>
                  <td>${getSpec(e).value}</td>
                </tr>
              </table>
            </p>
          </div>
        </div>
      </div> `;
    cardArr.push(new Card(card));
  });
  cardArr.forEach((e) => (cardFill += e.content));
  createHtml(cardFill);
  // write to file using array
};

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
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>My Team</title>
  </head>
  <body>
    <header class="jumbotron bg-success p-3"><h1 class="text-center text-light">My Team</h1></header>
    <main class="container">
      <div class="row">
      ${data}
      </div>
    </main>
  </body>
</html>

  `;
  writeToFile("index.html", content);
};

// TODO export html and css files (use bootstrap) using path and fs
const writeToFile = (fileName, content) => {
  console.log("Writing team to file");
  // TODO change file path
  fs.writeFileSync(path.join(process.cwd(),'/dist/', fileName), content);
};

module.exports = createCards;