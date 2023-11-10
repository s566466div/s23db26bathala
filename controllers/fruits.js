var fruits = require('../models/fruits');
// List of all fruitss
// List of all fruitss
exports.fruits_list = async function(req, res) {
    try{
    thefruitss = await fruits.find();
    res.send(thefruitss);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific fruits.
exports.fruits_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await fruits.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle fruits create on POST.
exports.fruits_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fruits();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"fruits_type":"goat", "cost":12, "size":"large"}
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
// Handle fruits delete form on DELETE.
exports.fruits_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fruits delete DELETE ' + req.params.id);
};
// Handle fruits update form on PUT.
// Handle fruits update form on PUT.
exports.fruits_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await fruits.findById( req.params.id)
 // Do updates of properties
 if(req.body.name)toUpdate.name = req.body.name;
 if(req.body.color) toUpdate.color = req.body.color;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
exports.fruits_view_all_Page = async function(req, res) {
    try{
    thefruit = await fruits.find();
    res.render('fruits', { title: 'fruits Search Results', results: thefruit });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };