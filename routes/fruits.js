var express = require('express');
const fruits_controllers= require('../controllers/fruits');
var router = express.Router();

/* GET home page. */
router.get('/', fruits_controllers.fruits_view_all_page );
module.exports = router;