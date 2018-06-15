// app/routes.js
// var express = require("express");
// var bodyParser = require("body-parser");
// var handlebars = require('express-handlebars');
// var models = require('../models');
// var Recipe = require('../models')['Recipe'];
// var Users = require('../models')['Users'];
 module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	
// home page
// app.get('/', function(req, res) {
//     res.render('index');
// });


// app.get('/newRecipe', function(req, res) {
//     res.render('newRecipe');
// });

// app.get('/database', function(req, res) {
//     res.render('allData');
// });

// app.get('/personal', function(req, res) {
//     res.render('personal');
// });
// app.get('/search', function(req, res) {
//     res.render('search');
// });
// app.get('/users', function(req, res) {
//     res.render('users');
// });

// app.get('/posts/:id', function(req, res) {
//     res.render('singleRecipe');
// });


// //////////////////////////        
// // view single recipe        
// app.get('/singleRecipe/:id', function (req, res) {
//     var id = req.params.id;
//     Recipe.findOne({
//         where: {
//             id: req.params.id
//         }
//     }).then(function (recipe) {
//         console.log('singleRecipe', recipe);
//         res.render('singleRecipe', {
//             recipe: recipe
//         });
//     });

// });
// /////////////////////////////////
// // recipes rank

// app.get('/allrecipes/', function (req, res) {
    
//     Recipe.findAll(
//         {
//         order: [
//             ['score', 'DESC']
//         ]
//     }
// ).then(function (recipe) {
//         console.log('allData', recipe);
//         res.render('allData', {
//             recipes: recipe
//         });
//     });

// });





	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/personalPage');
    });

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/personal', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/personal', isLoggedIn, function(req, res) {
		res.render('personal.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
