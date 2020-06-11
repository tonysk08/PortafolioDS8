const express = require('express');
const defaultControllerr = require("../controllers/index");
const router = express.Router();

router.get('/',defaultControllerr.home);
router.get('/aboutCourse',defaultControllerr.aboutCourse);
router.get('/content',defaultControllerr.content);
router.get('/map',defaultControllerr.map);
router.get('/resume',defaultControllerr.resume);
module.exports = router;