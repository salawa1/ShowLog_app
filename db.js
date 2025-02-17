const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    //password: "Amat1966",
    //host: "localhost",
    //database: "ShowLog",
    //port: 5432,

    //Render account

    user: "cmps262_xawl_user",
    password: "ALnUIZa6mFfcMYSilL0dMTNrcB4wHBCN",
    host: "dpg-cucmf39opnds73aj7eq0-a",
    database: "ShowLog_app",
    port: 5432,
});

module.exports = pool;

