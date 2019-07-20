const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

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

app.get('/',function(req, res){
    res.render('index.ejs',{
        title : 'Welcome to Cuvala! move stuff around - Home',
        serviceProviders : serviceProviders
    });
});

app.post('/database/search', function(req, res){
    console.log(req.body.fromLocation);
})
app.listen(3000,function(){
    console.log('Server running at localhost:3000...');
});