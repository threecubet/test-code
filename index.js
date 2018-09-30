const express =require('express');
const routes = require('./routs/api');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


//set up express
const app = express();
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyparser.json());

app.use('/api',routes);

// listen for request
app.listen(3000,function(){
    console.log("listening");
});