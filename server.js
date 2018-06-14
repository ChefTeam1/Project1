var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');
var models = require('./models');
var Recipe = require('./models')['Recipe'];
var Users = require('./models')['Users'];


///////////////////////////////////
// passport stuff
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');

var app = express();

require('./config/passport')(passport); // pass passport for configuration



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'vidyapathaisalwaysrunning',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Ezra0827",
//     database: "cheftest1"
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
// });

// Passport stuff
////////////////////////////////////////////////////////

//Recipe.sync();
// Users.sync({force:true});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


////////////////////////////////////
// adding recipes
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/new-post', function (req, res) {
    res.render('newRecipe');
});


app.post('/new-post', function (req, res) {
    var recipe = req.body;
    Recipe.create({
        title: recipe.title,
        image: recipe.image,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
        healthlabel: recipe.healthlabel,
        score: 0,
    }).then(function (data) {
        console.log('data', data);
        res.redirect('/recipes/' + data.dataValues.id);
    });
});

//////////////////////////        
// view single recipe        
app.get('/recipes/:id', function (req, res) {
    var id = req.params.id;
    Recipe.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (recipe) {
        console.log('singleRecipe', recipe);
        res.render('singleRecipe', {
            recipe: recipe
        });
    });

});

/////////////////////////
// view all


app.get('/database/', function (req, res) {
    
    Recipe.findAll({
        // order: [
        //     ['score', 'DESC']
        // ]
    }).then(function (recipe) {
        console.log('allData', recipe);
        res.render('allData', {
            recipes: recipe
        });
    });

});


//////////////////////
//logins

app.get('/signup', function (req, res) {
    res.render('signup');
});

app.post('/signup', function (req, res) {
    var users = req.body;
    users.create({
        username: users.username,
        userpassword: users.password

    }).then(function (data) {
        console.log('data', data);
        res.redirect('/');
    });
});


//////////////////////////
var PORT = process.env.PORT || 8080;



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});