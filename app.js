const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
// sample middleware :
// const logger = function(req, res, next){
//     console.log('Logging...');
//     next();
// }

// app.use(logger);

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set static path
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req, res){
    res.send('Hello');
});

app.listen(3000,function(){
    console.log('testing');
});