const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get ('/', controller.getShows);
router.get ('/:id', controller.getShowsById);
router.post ('/', controller.addNewShow);
router.put ('/:id', controller.updateShow);

module.exports = router;