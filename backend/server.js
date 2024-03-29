const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/posts',require('./routes/postRoutes'))

app.listen(port, ()=>console.log('listening on  port ' + port));

