var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');
var models = require('./models');
var Recipe = require('./models')['Recipe'];
var Users = require('./models')['Users'];
var Ingredients = require('./models')['Ingredients'];
var Steps = require('./models')['Steps'];
var Posts = require('./models')['Posts'];
//var Recipe2 = require('./models')['Recipes2'];
///////////////////////////////////

var app = express();

// set up our express application
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

express.static(path.join(__dirname, 'public/assets/js/logic.js'));

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
});




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
////////////////////////////////////////////


app.get("/api/recipes", function(req, res) {
    // findAll returns all entries for a table when used with no options
    Recipe.findAll({}).then(function(dbRecipes) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbRecipes);
    });
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
       
        //console.log('allData', result);
        //recipe = result;

        res.render('allData', {
            recipes: recipe
        });
    });
});






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


app.put('/allrecipes', function (req, res) {
    Post.findById(req.params.id).exec(function (err, post) {
      post.upVotes.push(req.user._id)
      post.voteScore = post.voteTotal + 1
      post.save();
      res.status(200);
    })
  })
  
  app.put('/allrecipes', function (req, res) {
    Post.findById(req.params.id).exec(function (err, post) {
      post.downVotes.push(req.user._id)
      post.voteScore = post.voteTotal - 1
      post.save();
      res.status(200);
    })
  })


//////////////////////////
var PORT = process.env.PORT || 8080;



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});