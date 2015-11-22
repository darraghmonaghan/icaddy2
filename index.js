
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
			console.log('new user created successfully: ' + user);
			req.login(user);
			res.redirect('/profile');
		}
	});
});




// LOGIN
app.get("/login", function (req, res) {
	var loginPath = path.join(views, 'login.html');
	res.sendFile(loginPath);
});


app.post(["/sessions", "/login"], function login(req, res) {
	var user = req.body;
	var username = user.email;                 // Extracting username and password data //  
	var password = user.password;              
	db.User.authenticate(username, password, function (err, user) {
		if (err) {
			console.log("error in authentication");
			res.redirect('/login');                // redirect to LOGIN page if authentication fails // 
		} else {                                
			req.login(user);
			res.redirect('/profile');
		}
	});
});



// PROFILE 
app.get("/profile", function userShow(req, res) {
	req.currentUser(function(err, user) {
	if (err) {
		console.log("Error finding current user: " + err);
	} else {
		console.log("Current User details: " + user);
	}
	var profilePath = path.join(views, 'profile.html');
	res.sendFile(profilePath);		
	});	
});

// CURRENT USER INFO //
app.get('/user.json', function (req,res) {
	req.currentUser(function (err, user) {
		res.send(JSON.stringify(user))
	});
});


// NEW COURSE INFO
app.get('/scorecard', function (req, res) {
	var newScorecardPath = path.join(views, 'newCourseInfo.html');
	res.sendFile(newScorecardPath);
});

app.post('/scorecard', function (req, res) {
	var submission = req.body;

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


// app.get('/:course', function (req, res) {
// 	// console.log('route hit');
// 	var courseID = req.params.course;
// 	// console.log("Course ID taken from params here: " + courseID);
	

// 	var course = db.Course.find({_id: courseID}, function (err, course) {
// 			if (err) {
// 				console.log('couldnt find course: ' + err);
// 			} else {
// 				// JSON.stringify(course);
// 				console.log('Course found: ' + course);
// 			}
// 	});
// 	// res.send(course);
// }); 



// app.get('/:course.json', function (req, res) {
// 	console.log('Info Here: ' + req.params.course);
// 	res.send('Hi there');
// });

app.get('/:course.json', function (req, res) {
	var courseID = req.params.course;
	var course = db.Course.find({_id: courseID}, function (err, course) {
			if (err) {
				console.log('couldnt find course: ' + err);
			} else {
				console.log('Course found: ' + course);
				res.send(course);
			}
	});
}); 




// NEW SCORE 
app.get("/:course/newscore", function (req, res) {
	var newScorePath = path.join(views, 'newScore.html');
	res.sendFile(newScorePath);
});


app.post("/:course/newscore", function (req, res) {
	var date = req.body.date;
	var score = req.body.score;
	var putts = req.body.putts;
	var coursename = req.body.coursename;
	// var course = req.params;

	console.log('This is the info from Hidden Field: ' + coursename);

	var newScore = new db.Game({date: date, score: score, putts: putts, course_id: coursename});
	newScore.save(function (err, game) {
		if (err) {
			console.log('error submitting new score to the DB: ' + err);
		} else {
			console.log('new score successfully saved to the DB: ' + game);
		}
	});
	res.redirect('/profile');
});





// LIST OF USER COURSES
app.get('/mycourses', function (req, res) {
	var myCoursesPath = path.join(views, 'myCourses.html');
	// res.send()
	res.sendFile(myCoursesPath);
});



app.get('/listOfCourses', function (req, res) {
	var courseList = db.Course.find({}, function(err, courses) {
		if (err) {
			// console.log('error in finding course list: ' + err);
		} else {
			JSON.stringify(courses);
			// console.log('game list successfully found from DB: ' + courses);
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