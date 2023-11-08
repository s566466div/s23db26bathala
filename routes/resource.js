var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fruits_controller = require('../controllers/fruits');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// fruits ROUTES ///
// POST request for creating a fruits.
router.post('/fruits', fruits_controller.fruits_create_post);
// DELETE request to delete fruits.
router.delete('/fruits/:id', fruits_controller.fruits_delete);
// PUT request to update fruits.
router.put('/fruits/:id', fruits_controller.fruits_update_put);
// GET request for one fruits.
router.get('/fruits/:id', fruits_controller.fruits_detail);
// GET request for list of all fruits items.
router.get('/fruits', fruits_controller.fruits_list);
module.exports = router;
