const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newcontrollers.index

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
