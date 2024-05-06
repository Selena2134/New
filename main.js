const express = require('express');
const booksRoutes = require('./routes/server.js');
const app = express();
app.use(booksRoutes);








app.listen(3000 , ()=>{
    console.log('server started at htpp://localhost:3000')
});