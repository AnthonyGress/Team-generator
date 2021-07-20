// require classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createCards = require('./src/createHtml');
// require packages

const inquirer = require('inquirer');
let employees = [];
// Start the program by asking for manager info
init = () => {
console.log("Welcome to the Team Builder!\n");
getInput(managerQs);
}
// Menu asks the user if they want to add another employee or build the site
menu = () => {
  console.log("\n")
  inquirer
  .prompt(menuQs)
  .then((answers) => {
  if (answers.menu == 'Add an Engineer') {
    getInput(engineerQs);
  }
  else if (answers.menu == 'Add an Intern') {
    getInput(internQs);
  }
  else {
    createCards(employees);
    // build / sort / write files
  }
  })
  .catch((error) => {
  console.log(error);
  });
  }

const menuQs = [
  {
    type: 'list',
    name: 'menu',
    message: 'What would you like to do next?',
    choices:[
      'Add an Engineer',
      'Add an Intern',
      'Build Team',
    ],
  }
];

const managerQs = [
  {
    type: "input",
    name: "name",
    message: "What is the Manager's name?",
    default: "Manager 1",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Manager's ID #?",
    default: "1",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's email address?",
    default: "manager1@email.com",
  },
  {
    type: "input",
    name: "office",
    message: "What is the Manager's offices' phone number?",
    default: "555-123-1234",
  },
];

const engineerQs = [
  {
    type: "input",
    name: "name",
    message: "What is the Engineer's name?",
    default: "Engineer 1",
  },

  {
    type: "input",
    name: "id",
    message: "What is the Engineer's ID #?",
    default: "2",
  },

  {
    type: "input",
    name: "email",
    message: "What is the Engineer's email address?",
    default: "engineer1@email.com",
  },

  {
    type: "input",
    name: "github",
    message: "What is the Engineer's GitHub username?",
    default: "engineer1",
  },
];

const internQs = [
  {
    type: "input",
    name: "name",
    message: "What is the Intern's name?",
    default: "Intern 1",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Intern's ID #?",
    default: "3",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Intern's email address?",
    default: "intern@email.com",
  },
  {
    type: "input",
    name: "school",
    message: "What school is the Intern from?",
    default: "UCF",
  },
];

// Asks the user questions to build the team
getInput = (empQs) => {
  inquirer
    .prompt(empQs)
    .then((answers) => {
      let e = answers;
      if (empQs[0].message.includes("Engineer")){
        // create new engineer obj
        employees.push(new Engineer(e.name, e.id, e.email, e.github));
        menu();
      }
      else if (empQs[0].message.includes("Manager")) {
        // create new engineer obj
        employees.push(new Manager(e.name, e.id, e.email, e.office));
        menu();
      } else {
        // create new intern
        // create new engineer obj
        employees.push(new Intern(e.name, e.id, e.email, e.school));
        menu();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
// starts the program
init();