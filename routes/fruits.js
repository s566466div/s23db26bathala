var express = require('express');
const fruits_controllers= require('../controllers/fruits');
var router = express.Router();

/* GET home page. */
router.get('/', fruits_controllers.fruits_view_all_Page );
/* GET detail fruits page */
router.get('/detail', fruits_controllers.fruits_view_one_Page);
/* GET create fruits page */
router.get('/create', fruits_controllers.fruits_create_Page);
/* GET create update page */
router.get('/update', fruits_controllers.fruits_update_Page);
/* GET delete Fruits page */
router.get('/delete', fruits_controllers.fruits_delete_Page);

module.exports = router;