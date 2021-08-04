const mysql = require('mysql');
require("dotenv").config();
// set up the connection to our database
const db = mysql.createConnection({
  user: process.env.DB_MYSQL_USER,
  password: process.env.DB_MYSQL_PASSWORD,
});

db.query('CREATE DATABASE tasks');
db.query('USE tasks');

db.query(`
CREATE TABLE tasks.tasks (
id INT NOT NULL AUTO_INCREMENT,
task TEXT NOT NULL, PRIMARY KEY ( id ));
`);
// Catching Errors
const ignore = new Set([
  'ER_DB_CREATE_EXISTS', 'ER_TABLE_EXISTS_ERROR'
]); 
// error event handler 
db.on('error', (err) => {
  if(ignore.has(err.code)) return; 
  throw err;
});
/* db.query(`
INSERT INTO tasks.tasks (task)
VALUES ("Walk the new dog.");
`); */
if (process.argv[2]) {
  db.query(
    `
      INSERT INTO tasks.tasks (task)
      VALUES(?);
    `,
    [process.argv[2]]
  );
}

db.query(`
SELECT * FROM tasks.tasks;
`, (err, results, fields) => {
console.log(results);
db.end();
});

