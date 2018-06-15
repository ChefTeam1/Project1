var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');
var models = require('./models');
var Recipe = require('./models')['Recipe'];
var Users = require('./models')['Users'];
var Ingredients = require('./models')['Ingredients'];
var Steps = require('./models')['Steps'];
var Posts = require('./models')['Posts'];
//var Recipe2 = require('./models')['Recipes2'];

var Ingredients = require('./models')['Ingredients'];
var Steps = require('./models')['Steps'];

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

// var mysql = require("mysql");

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

//Recipe2.sync();
Posts.sync();
Steps.sync();
Ingredients.sync();
Recipe.sync();
Users.sync({
    force: true
});



Ingredients.sync();
Recipe.sync();
Users.sync({force:true});


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

    res.render('newRecipe'); 
});


app.post('/newRecipe', function (req, res) {

    // var recipe = req.body;
    // Recipe.create({
    //     title: recipe.title,
    //     image: recipe.image,
    //     // ingredients: recipe.ingredients,
    //     // steps: recipe.steps,
    //     healthlabel: recipe.healthlabel,
    //     score: 0,


    var recipe = req.body;
    Recipe.create({
        title: recipe.title,
        image: recipe.image,
        // ingredients: recipe.ingredients,
        // steps: recipe.steps,
        healthlabel: recipe.healthlabel,
        score: 0,
    }).then(function (data) {
        console.log('data', data);
        // res.redirect('/recipes/' + data.dataValues.id);
    });
    
    Ingredients.create({
        ing1: recipe.ingredients
    }).then(function (data) {
        console.log('data', data);
        res.redirect('/recipes/' + data.dataValues.id);
    });
});

// //////////////////////////        
// // view single recipe        
app.get('/recipes/:id', function (req, res) {
    var id = req.params.id;
    var recipe;
    Recipe.findOne({
        where: {
            id: req.params.id
        },
        
    }).then(function (result) {
        // console.log('singleRecipe', recipe);
        // res.render('singleRecipe', {
        //     recipe: recipe
        // });
        recipe = result;
        console.log("saved recipe is ", recipe);
    });
    Ingredients.findOne({
        where: {
            id: req.params.id
        },
        
    }).then(function (ingredients) {
        console.log('singleRecipe', ingredients);
        res.render('singleRecipe', {
            ingredients: ingredients,
            recipe: recipe
        });
    });

});

// /////////////////////////
// // 

app.get('/personal', function(req, res) {
    res.render('personal');
});
app.get('/search', function(req, res) {
    res.render('search');
});
app.get('/users', function(req, res) {
    res.render('users');
});

app.post('/new-post', function (req, res) {
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

    // Steps.create({
    //     s1: recipe.steps1,
    //     s2: recipe.steps2,
    //     s3: recipe.steps3,
    //     s4: recipe.steps4, 
    //     s5: recipe.steps5,
    //     s6: recipe.steps6,
    //     s7: recipe.steps7,
    //     s8: recipe.steps8,
    //     s9: recipe.steps9,
    //     s10: recipe.steps10,
    //     s11: recipe.steps11,
    //     s12: recipe.steps12,
    //     s13: recipe.steps13,
    //     s14: recipe.steps14,
    //     s15: recipe.steps15
    // }).then(function (data) {
    //     console.log('data', data);
    //     //res.redirect('/recipes/' + data.dataValues.id);
    // });

    // Ingredients.create({
    //     ing1: recipe.ingredients1,
    //     ing2: recipe.ingredients2,
    //     ing3: recipe.ingredients3,
    //     ing4: recipe.ingredients4,
    //     ing5: recipe.ingredients5,
    //     ing6: recipe.ingredients6,
    //     ing7: recipe.ingredients7,
    //     ing8: recipe.ingredients8,
    //     ing9: recipe.ingredients9,
    //     ing10: recipe.ingredients10,
    //     ing11: recipe.ingredients11,
    //     ing12: recipe.ingredients12,
    //     ing13: recipe.ingredients13,
    //     ing14: recipe.ingredients14,
    //     ing15: recipe.ingredients15
    // }).then(function (data) {
    //     console.log('data', data);
    //     res.redirect('/recipes/' + data.dataValues.id);
    // });
});

// //////////////////////////        
// // view single recipe        
app.get('/recipes/:id', function (req, res) {
    var id = req.params.id;
    // var recipe;
    // var steps;
    Recipe.findOne({
        where: {
            id: req.params.id
        },

    }).then(function (recipe) {
        // console.log('singleRecipe', recipe);
        res.render('singleRecipe', {
            recipe: recipe
        });
       // recipe = result;
        // console.log("saved recipe is ", recipe);
    });


    // Steps.findOne({
    //     where: {
    //         id: req.params.id
    //     },

    // }).then(function (result) {
    //     // console.log('singleRecipe', recipe);
    //     // res.render('singleRecipe', {
    //     //     recipe: recipe
    //     // });
    //     steps = result;
    //     // console.log("/////////////////////////////////////////////////////////////////////////////////", steps);
    // });

    // Ingredients.findOne({
    //     where: {
    //         id: req.params.id
    //     },

    // }).then(function (ingredients) {

    //     //console.log('spacer/////////////////////////////////////////////////////////////////');
    //     //console.log(ingredients);

    //     //console.log('singleRecipe', ingredients);
    //     res.render('singleRecipe', {
    //         ingredients: ingredients,
    //         recipe: recipe,
    //         steps: steps
    //     });
    // });

});

// /////////////////////////
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

// /////////////////////////// 
// // recipe ranking

app.get('/allrecipes/', function (req, res) {

    // var recipe;
    // var ingredients;

    Recipe.findAll({
        order: [
            ['score', 'DESC']
        ]
    }).then(function (recipe) {

        //console.log(Recipe.dataValues);
        //console.log('//////////////////////////////////////////////////////////////////////////////////////////////////////////');
        //console.log('allData', result);
        //recipe = result;


// /////////////////////////// 
// // recipe ranking
app.get('/allrecipes/', function (req, res) {
    
    Recipe.findAll(
        {
        order: [
            ['score', 'DESC']
        ]
    }
).then(function (recipe) {
        console.log('allData', recipe);
        res.render('allData', {
            recipes: recipe
        });
    });
});
// app.get('/allrecipes/', function (req, res) {

//     var recipe;
//     var ingredients;

//     Recipe.findAll({
//         order: [
//             ['score', 'DESC']
//         ]
//     }).then(function (result) {
//         //console.log(Recipe.dataValues);
//         //console.log('//////////////////////////////////////////////////////////////////////////////////////////////////////////');
//         //console.log('allData', result);
//         recipe = result;

//         // res.render('allData', {
//         //     recipes: recipe
//         // });
//     });

//     Ingredients.findAll({
//         order: [
//             ['score', 'DESC']
//         ]
//     }).then(function (result) {
//         //console.log('allData', result);
//         ingredients = result;
//         // res.render('allData', {
//         //     recipes: recipe
//         // });
//     });

//     Steps.findAll({
//         order: [
//             ['score', 'DESC']
//         ]
//     }).then(function (steps) {
//         //console.log('allData', result);
//         console.log(recipe);
//         res.render('allData', {
//             ingredients: ingredients,
//             recipes: recipe,
//             steps: steps
//         });
//     });
// });


//////////////////////////////////////
// $(document).ready(function () {


//     $(document).on("click", "#upVote", increaseScore);


//     function increaseScore() {

//         router.put('/allrecipes/', function (req, res, next) {
//             Recipe.update({
//                     score: sequelize.literal('field + 1')
//                 }, {
//                     where: {
//                         id: this.id
//                     }
//                 })
//                 .then(function (rowsUpdated) {
//                     res.redirect('/allrecipes/');
//                 })
//             // .catch(next)
//         });
//     };


// });



//////////////////////
//logins
});

// // app.get('/allrecipes/', function (req, res) {
// //         connection.query("SELECT * FROM recipes;", function(err, data) {
// //             if (err) {
// //               return res.status(500).end();
// //             }
        
// //             res.render("allData", { recipes: data });
// //           });
// //         });



// //////////////////////
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