const getShows = "SELECT * FROM shows";
const getShowsById = "select * from shows where showid = $1";
const addNewShow = "insert into shows(name,seasons,genre,releaseyear,country,service) VALUES($1,$2,$3,$4,$5,$6)";
const updateShow = "update shows set name = $1, seasons = $2, genre = $3, releaseyear = $4, country = $5, service = $6 where showid = $7";

module.exports = {
    getShows,
    getShowsById,
    addNewShow,
    updateShow,
};