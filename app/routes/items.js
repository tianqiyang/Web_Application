var express = require('express');
var router = express.Router();
// require Item Object
//TODO
// require middleware 
// TODO

/***************************
 * Default page for item 
 ***************************/

router.get('/', (req, res) => {
    //TODO pass item to ejs 
    res.render('items/index');
});


/**************
 * New Item
 **************/

 router.get('/new',(req, res)=>{
    res.render('items/new');
 });

 /**************
 * Create Item
 **************/

 router.post('/', (req, res) => {
     // handle data returned from the form
     // and redirect to index page 
     res.redirect('/items');
 })


module.exports = router;