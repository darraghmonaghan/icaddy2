
var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    // db = require("./models"),
    mongoose = require('mongoose'),
    views = path.join(__dirname, "views"),
    session = require("express-session");


app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({extended: true}));


// SIGN UP
app.get("/signup", function (req, res) {
	// res.send('hello test 1')
	var signUpPath = path.join(views, 'signup.html');
	res.sendFile(signUpPath);
});




// LOGIN
app.get("/login", function (req, res) {
	// res.send('hello test 1')
	var loginPath = path.join(views, 'login.html');
	res.sendFile(loginPath);
});



// PROFILE 
app.get("/profile", function (req, res) {
	// res.send('hello test 1')
	var profilePath = path.join(views, 'profile.html');
	res.sendFile(profilePath);
});


// NEW COURSE INFO
app.get('/scorecard', function (req, res) {
	var newScorecardPath = path.join(views, 'newCourseInfo.html');
	res.sendFile(newScorecardPath);
});

app.post('/scorecard', function (req, res) {
	var par = req.body.par;
	var courseName = req.body.course;
	console.log(courseName);
	console.log(par);
	res.redirect('./profile');
});


// NEW SCORE 
app.get("/newscore", function (req, res) {
	// res.send('hello test 1')
	var newScorePath = path.join(views, 'newScore.html');
	res.sendFile(newScorePath);
});

app.post("/newscore", function (req, res) {
	var date = req.body.name;
	var score = req.body.score;
	console.log(score);
	res.redirect('./profile');
});


// FULL LIST OF SCORES 
app.get("/scorelist", function (req, res) {
	// res.send('hello test 1')
	var scoreListPath = path.join(views, 'fullScoresList.html');
	res.sendFile(scoreListPath);
});


// INDIVIDUAL SCORE DETAILS 
app.get("/round", function (req, res) {
	// res.send('hello test 1')
	var roundInfoPath = path.join(views, 'scorePage.html');
	res.sendFile(roundInfoPath);
});


// COURSE DETAILS
app.get("/course", function (req, res) {
	// res.send('hello test 1')
	var courseInfoPath = path.join(views, 'course.html');
	res.sendFile(courseInfoPath);
});



// start the server
app.listen(3000, function () {
    console.log("Yeah Buddy! head to localhost:3000/");
});