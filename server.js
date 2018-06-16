var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');
var models = require('./models');
var Recipe = require('./models')['Recipe'];
var Users = require('./models')['Users'];
var Ingredients = require('./models')['Ingredients'];
var Steps = require('./models')['Steps'];
var Posts = require('./models')['Posts'];
///////////////////////////////////

var app = express();

// set up our express application
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

////////////////////////////////////////////////////////
Posts.sync();
Steps.sync();
Ingredients.sync();
Recipe.sync();


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

app.get('/newRecipe', function (req, res) {
    res.render('newRecipe');
});


app.post('/newRecipe', function (req, res) {
    var recipe = req.body;
    Recipe.create({
        title: recipe.title,
        image: recipe.image,
        ing1: recipe.ingredients1,
        ing2: recipe.ingredients2,
        ing3: recipe.ingredients3,
        ing4: recipe.ingredients4,
        ing5: recipe.ingredients5,
        step1: recipe.steps1,
        step2: recipe.steps2,
        step3: recipe.steps3,
        step4: recipe.steps4,
        step5: recipe.steps5,
        healthlabel: recipe.healthlabel,
        score: 0
    }).then(function (data) {
        console.log('data', data);
        res.redirect('/recipes/' + data.dataValues.id);
    });
});

// //////////////////////////        
// // view single recipe        
app.get('/recipes/:id', function (req, res) {
    var id = req.params.id;
    Recipe.findOne({
        where: {
            id: req.params.id
        },

    }).then(function (recipe) {
        res.render('singleRecipe', {
            recipe: recipe
        });
    });
});


// // 

app.get('/personal', function (req, res) {
    res.render('personalPage');
});
app.get('/search', function (req, res) {
    res.render('search');
});
app.get('/users', function (req, res) {
    res.render('users');
});


// // recipe ranking

app.get('/allrecipes/', function (req, res) {
    Recipe.findAll({
        order: [
            ['score', 'DESC']
        ]
    }).then(function (recipe) {
        res.render('allData', {
            recipes: recipe
        });
    });
});

// //logins

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