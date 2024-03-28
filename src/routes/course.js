const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// newcontrollers.index

router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.post('/create', courseController.store);

module.exports = router;