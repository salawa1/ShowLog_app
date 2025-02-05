const Pool = require("pg").Pool;

const pool = new Pool({
    user: "Postgres",
    password: "ALnUIZa6mFfcMYSilL0dMTNrcB4wHBCN",
    host: "dpg-cucmf39opnds73aj7eq0-a",
    database: "ShowLog",
    port: 5432,
});

module.exports = pool;
