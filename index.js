// stock market potofolio app by Cheikh Fall

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000; 

// set handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// set handlebars route
app.get('/', function (req, res) {
    res.render('home',{
        stuff:"this is stuff..."

    });
});

//set static folder
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT ,()=> console.log(' Server listening on port' + PORT));