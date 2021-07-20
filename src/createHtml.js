const fs = require("fs");
const path = require("path");
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
  let specTitle, specVal;
  if (e.getRole() == "Manager") {
    console.log('setting spec to manager');
    specTitle = "Office Number";
    specVal = e.officeNumber;
  } 
  else if (e.getRole() == "Engineer") {
    console.log("setting spec to engineer");
    specTitle = "GitHub";
    specVal = e.github;
  } 
  else {
    console.log("setting spec to intern");
    specTitle = "School";
    specVal = e.school;
  }
   let spec = {
     title: specTitle,
     value: specVal,
   };
  return spec;
};
// take data from user for all employees and make bootstrap cards for each one
const createCards = (emp) => {
  console.log("creating cards");
  console.log(emp);
  emp.forEach((e) => {
    // create a card for each person
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
                  <td><a href="mailto:${e.email}">${e.email}</a></td>
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
  // append to html file
  writeToFile("index.html", content);
};

// export html and css files (use bootstrap) using path and fs
const writeToFile = (fileName, content) => {
  console.log("Writing team to file");
  // TODO change file path
  fs.writeFileSync(path.join(process.cwd(),'/dist/', fileName), content);
};

module.exports = createCards;