const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// sitecontrollers.index

router.get('/', siteController.index);
router.get('/search', siteController.search);

module.exports = router;
