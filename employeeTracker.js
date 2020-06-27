var mysql = require("mysql");
var inquirer = require("inquirer");
// require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "PleaseWorkNow1234!",
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
        "Vew employee",
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

        // case "Find all artists who appear more than once":
        //   multiSearch();
        //   break;

        // case "Find data within a specific range":
        //   rangeSearch();
        //   break;

        // case "Search for a specific song":
        //   songSearch();
        //   break;

        // case "Find artists with a top song and top album in the same year":
        //   songAndAlbumSearch();
        //   break;
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
      var query = "SELECT department, FROM department WHERE ?";
      console.log(answer);
      connection.query(query, { department: answer.department }, function (
        err,
        res
      ) {
        if (err) throw err;
        // res is an array of objects
        // for (var i = 0; i < res.length; i++) {
        //   console.log(
        //     "Department: " +
        //       res[i].position +
        //       " || Song: " +
        //       res[i].song +
        //       " || Year: " +
        //       res[i].year
        //   );
        // }
      });
      console.log(answer);
      runTable();
    });
}

function addNewDepartment() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "Which new department would you like to add?",
    })
    .then(function (name) {
      var query = "INSERT INTO department (name)";
      query += "VALUES (" + name.department + ")";
      console.log(query);
      connection.query(query, { department: name.department }, function (
        err,
        res
      ) {
        // res is an array of objects
        // for (var i = 0; i < res.length; i++) {
        //   console.log("Department: " + res[i] + " || Response: ");
        // }
        // runSearch();
      });
    });
}
