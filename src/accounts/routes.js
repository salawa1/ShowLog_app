const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get ('/', controller.getShows);
router.get ('/:id', controller.getShowsById);

module.exports = router;