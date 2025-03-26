require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    //password: "Amat1966",
    //host: "localhost",
    //database: "ShowLog",
    //port: 5432,

    //Render account

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

module.exports = pool;

