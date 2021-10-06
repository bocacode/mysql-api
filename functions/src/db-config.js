const mysql = require("mysql2")
const { credentials } = require("./db-credentials")

exports.dbConnection = mysql.createConnection(credentials);

// exports.dbConnection = mysql.createConnection({
//     host: "db.bayleen.com", 
//     user: "swecc04",
//     password: "BuildingSoFlo2021", 
//     database: "swecc04"
// });