var fruits = require('../models/fruits');
// List of all fruits
exports.fruits_list = function(req, res) {
 res.send('NOT IMPLEMENTED: fruits list');
};
// for a specific fruits.
exports.fruits_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: fruits detail: ' + req.params.id);
};
// Handle fruits create on POST.
exports.fruits_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: fruits create POST');
};
// Handle fruits delete form on DELETE.
exports.fruits_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fruits delete DELETE ' + req.params.id);
};
// Handle fruits update form on PUT.
exports.fruits_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: fruits update PUT' + req.params.id);
};