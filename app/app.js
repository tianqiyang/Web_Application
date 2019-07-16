const express = require('express');
const app = express();

/**************************
 * Require express routing
 **************************/

 const itemRoutes = require('./routes/items');
 const indexRoutes = require('./routes/index');
 const commentRoutes = require('./routes/comments')

/****************
 * Set ultilities
 ****************/

 app.set('view engine', 'ejs');

/***************************
 * Use express routing
 ***************************/
app.use('/', indexRoutes);
app.use('/items', itemRoutes);
app.use('/items/:id/comments', commentRoutes);


/***************************
 * Start the Server
 ***************************/
const port = 9000 || process.env.port;
app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
});
