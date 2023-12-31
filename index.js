//Module
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path=require('path');

//custom file
const route = require('./routes/routes');

//app
const app = express()

//static files
app.use(express.static(path.join(__dirname,'public')))


//Add middleware
app.use(bodyParser.urlencoded({ extended: true }));

// connect Database
mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(() => console.log("database connection"))
    .catch(err => console.log(err.message));


//view
app.set('view engine', 'ejs')

//routes
app.use(route)

//Port
const PORT = process.env.PORT || 4000;

//server listen
app.listen(PORT, () => {
    console.log(`servre is running port ${PORT}`);
})