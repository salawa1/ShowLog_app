const getShows = "SELECT * FROM shows";
const getShowsById = "select * from shows where showid = $1";

module.exports = {
    getShows,
    getShowsById,
};