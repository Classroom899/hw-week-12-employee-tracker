require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PASS,
  database: "company_db",
});

connection.connect(function (err) {
  if (err) throw err;
  runTable();
});

function runTable() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist", // USE THIS FOR THE HOMEWORK // rawlist makes it an ordered list
      message: "What would you like to do?",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View department",
        "View role",
        "View employee",
        "exit",
      ],
    })
    .then(function (answer) {
      // Inquirer is an asynchronous function
      // Once you get the .then then your switch case comes in
      switch (
        answer.action // answer.action represents the value of the user selection
      ) {
        case "View department":
          departmentSearch(); // always put a function inside the case statement
          break; // without the break, it will combine two cases together so essentially it is an or statement
        case "Add department":
          addNewDepartment();
          break;
        case "exit":
          connection.end();
          break;

        case "View role":
          roleSearch();
          break;
        case "Add role":
          addNewRole();
          break;
        case "exit":
          connection.end();
          break;

        case "View employee":
          employeeSearch();
          break;
        case "Add employee":
          addNewEmployee();
          break;
        case "exit":
          connection.end();
          break;
      }
    });
}

function departmentSearch() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "What department would you like to search for?",
    })
    .then(function (answer) {
      var query = "SELECT * FROM department WHERE ?";
      console.log(answer);
      connection.query(query, { name: answer.department }, function (err, res) {
        if (err) console.log(err);
        // res is an array of objects
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          console.table(res[i]);
        }
      });
      console.log(answer);
      runTable();
    });
}

function addNewDepartment() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "Which new department would you like to add?",
    })
    .then(function (name) {
      console.log(name);
      connection.query("INSERT INTO department SET ?", name, function (
        err,
        res
      ) {
        if (err) throw err;
        console.log("New Department", res);
      });
    });
}

function roleSearch() {
  inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "What role would you like to search for?",
    })
    .then(function (answer) {
      var query = "SELECT * FROM role WHERE ?";
      console.log(answer);
      connection.query(query, { title: answer.role }, function (err, res) {
        if (err) console.log(err);
        // res is an array of objects
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          console.table(res[i]);
        }
      });
      console.log(answer);
      runTable();
    });
}

function addNewRole() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "Which new role would you like to add?",
    })
    .then(function (role) {
      console.table(role);
      connection.query(
        "INSERT INTO role SET ?",
        { title: role.name },
        function (err, res) {
          if (err) console.log(err);
          console.table(res);
        }
      );
    });
}

function employeeSearch() {
  inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "Which employee name would you like to search for?",
    })
    .then(function (answer) {
      var query = "SELECT * FROM employee WHERE ?";
      console.log(answer);
      connection.query(query, { firstName: answer.employee }, function (
        err,
        res
      ) {
        if (err) console.log(err);
        // res is an array of objects
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          console.table(res[i]);
        }
      });
      console.log(answer);
      runTable();
    });
}

function addNewEmployee() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "Which new employee would you like to add?",
    })
    .then(function (employee) {
      console.table(employee);
      connection.query(
        "INSERT INTO employee SET ?",
        { firstName: employee.name },
        function (err, res) {
          if (err) console.log(err);
          console.table(res);
        }
      );
    });
}
