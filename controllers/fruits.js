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
exports.fruits_create_post = function(_req, res) {
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
// List of all fruits
exports.fruits_view_all_page = async function (req, res) {
    try {
        thefruits = await fruits.find();
        res.send(thefruits);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWSfruits_list

exports.fruits_list = async function (req, res) {
    try {
        thefruits = await fruits.find();
        res.render('fruits', { title: 'fruits Search Results', results: thefruits });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handlefruits create on POST.
exports.fruits_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fruits();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.color = req.body.color;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
