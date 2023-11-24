var express = require('express');
const fruits_controllers= require('../controllers/fruits');
var router = express.Router();
const passport = require('passport');
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }


/* GET home page. */
router.get('/', fruits_controllers.fruits_view_all_Page );
/* GET detail fruits page */
router.get('/detail', fruits_controllers.fruits_view_one_Page);
/* GET create fruits page */
router.get('/create', fruits_controllers.fruits_create_Page);
/* GET create update page */
router.get('/update',secured, fruits_controllers.fruits_update_Page);
/* GET delete Fruits page */
router.get('/delete', fruits_controllers.fruits_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });
module.exports = router;