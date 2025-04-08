// require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    //password: "Amat1966",
    //host: "localhost",
    //database: "ShowLog",
    //port: 5432,

    //Render account

    user: "samalawadhi",
    password: "Zo4CApmua2p6QN2T8ew8msgV6Clb5LEc",
    host: "dpg-cups04qn91rc73aofi90-a.ohio-postgres.render.com",
    database: "showlog_app",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;

