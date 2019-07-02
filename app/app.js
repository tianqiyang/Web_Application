const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('<h1>HOMEPAGE!</h1>');
});

const port = 9000 || process.env.port;
app.listen(port, ()=> {
    console.log(`Server started on port ${port}!!!`);
});