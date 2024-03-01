const Pool = require('pg').Pool;

const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "dvdrental",
    password: "root",
    port: 5432
});

module.exports = db;