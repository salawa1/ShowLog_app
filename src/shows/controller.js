const pool = require('../../db'); // initialized the DB
const queries = require('./queries'); // What queries to check for?

const getShows = (req, res) => {
    pool.query(queries.getShows,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

// Controller Filter on ShowID
// Author: Sam Alawadhi
// Date Created: 2/11/25
// Description: Refer to ReadMe. in GitHub
const getShowsById = (req, res) => {
    const showid = parseInt(req.params.id);
    if(isNaN(showid)) {
        return res.status(400).json({error: "Invalid value format"});
    }
    console.log("Received ShowID");
    pool.query(queries.getShowsById, [showid], (error, results) => {
        if(error){
            console.error("Database Error", error);
            return res.status(500).json({error: "Show Not Found"});
        }
        res.status(200).json(results.rows);
    })
}

//Post (Add new show information)
const addNewShow = (req, res) => {
    const {name,seasons,genre,releaseyear,country,service} = req.body;
    pool.query(queries.addNewShow, [name,seasons,genre,releaseyear,country,service], (error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
        res.status(201).send("Successfully added a new show");
    });
};

//Put (Modify existing show information)
const updateShow = (req, res) => {
    const showid = parseInt(req.params.id);
    const {name,seasons,genre,releaseyear,country,service} = req.body;
    pool.query(queries.updateShow, [name,seasons,genre,releaseyear,country,service,showid],(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
        res.status(201).send("Successfully modified the show");
    });
};

module.exports = {
    getShows,
    getShowsById,
    addNewShow,
    updateShow,
};