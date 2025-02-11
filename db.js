const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Amat1966",
    host: "localhost",
    database: "ShowLog",
    port: 5432,
});

module.exports = pool;
