const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongojs = require('mongojs');
const db = mongojs('cuvala',['tListings'])

//const expressValidator = require('express-validator');
const app = express();


// sample for custom middleware :
/* const logger = function(req, res, next){
    console.log('Logging...');
    next();
}
app.use(logger);
*/
const serviceProviders = [
    {
        id : 1,
        name : 'A Big truck Company or'
    },
    {
        id : 2,
        name : 'A small moving company or even'
    },
    {
        id : 3,
        name : 'An individual with means of relocating an object'  
    },
];
// View Engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set static path
app.use(express.static(path.join(__dirname,'public')));

app.get('/providers', function(req,res){
    res.render('providers.ejs',{
        title : 'Submit your listing to book clients!'
    });
});

app.get('/',function(req, res){
    db.tListings.find(function(err,docs){
        res.render('index.ejs',{
            title : 'Welcome to Cuvala! move stuff around - Home',
            serviceProviders : docs
        });
    });
});

app.post('/database/search', (req, res) => {
        console.log(req.body.fromLocation);
        console.log(req.body.toLocation);
});

app.listen(3000,function(){
    console.log('Server running at localhost:3000...');
});