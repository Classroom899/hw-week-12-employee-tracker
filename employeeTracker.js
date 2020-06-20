var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "access",

  // Your password
  password: "",
  database: "company_db",
});
