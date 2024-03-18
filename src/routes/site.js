const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// sitecontrollers.index

router.use('/', siteController.index);
router.use('/search', siteController.search);

module.exports = router;
