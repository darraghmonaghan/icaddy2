
var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    db = require("./models"),
    mongoose = require('mongoose'),
    views = path.join(__dirname, "views"),
    session = require("express-session");


app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(
  session({
    secret: 'super-secret-private-keyyy',
    resave: false,
    saveUninitialized: true
  })
);

app.use(function (req, res, next) {
  req.login = function (user) {               // login a user //
    req.session.userId = user._id;
  };
  req.currentUser = function (cb) {           // find the current user //
    db.User.
      findOne({ _id: req.session.userId },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };
  req.logout = function () {                  // logout the current user //
    req.session.userId = null;
    req.user = null;
  }
  next();                                     // call the next middleware in the stack
});


// SIGN UP
app.get("/signup", function (req, res) {
	// res.send('hello test 1')
	var signUpPath = path.join(views, 'signup.html');
	res.sendFile(signUpPath);
});

app.post('/signup', function signup(req, res) {
	var user = req.body;
  	var firstname = user.firstname;                           // Extract all required Signup information //
  	var surname = user.surname;
  	var email = user.email;
  	var password = user.password;


	db.User.createSecure(firstname, surname, email, password, function (err, user) {
		if (err) {
			console.log('error creating new user: ' + err);
			res.redirect('/signup');
		} else {
			console.log('new user created successfully' + user);
			req.login(user);
			res.redirect('/profile');
		}
	});
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
	// var par = req.body.par;
	// var courseName = req.body.course;
	var submission = req.body;
	
	// console.log(courseName);
	// console.log(par);
	// console.log(submission);

	var newCourse = new db.Course(submission);

	newCourse.save(function (err, course) {
		if (err) {
			console.log('error creating new course: ' + err);
		} else {
			console.log('new course created successfully: ' + course);
		} 
	});
	res.redirect('./profile');

	// Need to push Course ID to the users courseList [];

});


// NEW SCORE 
app.get("/newscore", function (req, res) {
	// res.send('hello test 1')
	var newScorePath = path.join(views, 'newScore.html');
	res.sendFile(newScorePath);
});

app.post("/newscore", function (req, res) {
	var date = req.body.date;
	var score = req.body.score;
	var putts = req.body.putts;
	console.log(score);
	console.log(date);
	console.log(putts);
	res.redirect('./profile');
});


// LIST OF USER COURSES
app.get('/mycourses', function (req, res) {
	var myCoursesPath = path.join(views, 'myCourses.html');
	res.sendFile(myCoursesPath);
});



app.get('/listOfCourses', function (req, res) {
	var courseList = db.Course.find({}, function(err, courses) {
		if (err) {
			console.log('error in finding course list: ' + err);
		} else {
			JSON.stringify(courses);
			console.log('game list successfully found from DB: ' + courses);
			res.send(courses);
		}
	});	
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