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
// Handle fruits delete on DELETE.
exports.fruits_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await fruits.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)    
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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
   // Handle a show one view with id specified by query
exports.fruits_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await fruits.findById( req.query.id)
    res.render('fruitsdetail',
   { title: 'fruits Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for creating a fruits.
// No body, no in path parameter, no query.
// Does not need to be async
exports.fruits_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('fruitscreate', { title: 'fruits Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    // Handle building the view for updating a fruits.
// query provides the id
exports.fruits_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await fruits.findById(req.query.id)
        res.render('fruitsupdate', { title: 'fruits Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
    };
   // Handle a delete one view with id from query
exports.fruits_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await fruits.findById(req.query.id)
    res.render('fruitsdelete', { title: 'fruits Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   
    