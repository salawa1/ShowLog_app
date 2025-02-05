const pool = require('../../db'); // initialized the DB
const queries = require('./queries'); // What queries to check for?

const getShows = (req, res) => {
    pool.query(queries.getShows,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getShows,
};