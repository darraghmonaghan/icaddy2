
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


app.get('/', function (req, res) {			// Auto redirect to Login Page //
	res.redirect('/login');
})


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


// LOGOUT
app.get('/logout', function (req, res) {
		req.logout()                                      // Execute logout() and redirect to Login / Homepage //
		res.redirect('/login');
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
			console.log('user found & logged in');
			res.redirect('/profile');
		}
	});
});



// PROFILE 
app.get("/profile", function userShow(req, res) {
	req.currentUser(function (err, user) {
	if (err) {
		console.log("Error finding current user: " + err);
	} else {
		console.log("Current User details: " + user);
	}
	var profilePath = path.join(views, 'profile.html');
	res.sendFile(profilePath);		
	});	
});



app.get('/user.json', function (req, res) {

	db.User.findOne({_id: req.session.userId })        // Find current user through querying DB using SessionID //
    .populate('gamesList')
    .populate('courseList')                           // Populate() converts the gameID's stored in the gamesList array into an array of game OBJECTS, with all relevant game data stored within each game object //
    .exec(function (err, game) {
        if (err) {
        	return console.log(err);                  
        } else {                                     // Stage 2. If gamesList is empty, then  do not send the gamesList Array, THIS STOPS NODEMON CRASHING //
        	res.send(JSON.stringify(game));
        }       
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

    db.User.findOne({                 // querying DB to find the current user via the Session ID //
                _id: req.session.userId
            }, function(err, user) {

			newCourse.save(function (err, course) {
				if (err) {
					console.log('error submitting new score to the DB: ' + err);
				} else {
					console.log('new score successfully saved to the DB: ' + course);
				}
			});
            user.courseList.push(newCourse._id);
            user.save(function(err, success) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(user.firstname + "'s new game has been entered!");
                });
			res.redirect('/profile');
	});
});


app.get('/:course.json', function (req, res) {
	var courseID = req.params.course;
	var course = db.Course.find({_id: courseID}, function (err, course) {
			if (err) {
				console.log('Couldnt find course: ' + err);
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
	var courseID = req.body.courseID;
	var nettScore = req.body.nett;
	var courseName = req.body.courseName;
	var totalScore = score.reduce(function (a, b) {
		return parseInt(a) + parseInt(b);
	});
	var totalPutts = putts.reduce(function (a, b) {
		return parseInt(a) + parseInt(b);
	})


    db.User.findOne({                 // querying DB to find the current user via the Session ID //
                _id: req.session.userId
            }, function(err, user) {

			var newScore = new db.Game({date: date, score: score, putts: putts, course_id: courseID, courseName: courseName, totalScore: totalScore, totalPutts: totalPutts});
			newScore.save(function (err, game) {
				if (err) {
					console.log('error submitting new score to the DB: ' + err);
				} else {
					console.log('new score successfully saved to the DB: ' + game);
				}
			});
			//	console.log(seedGame._id);
            user.gamesList.push(newScore._id);		// Push the ID of the game to the User profile //
            // user.courseList.push(newScore.coursename);
            //	console.log(user.gamesList);
            user.save(function(err, success) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(user.firstname + "'s new game has been entered!");
                });
			res.redirect('/profile');
	});
});


// DELETE A SPECIFIC GAME
app.delete("/games", function (req, res) {
  	//console.log(req.headers.id);             // testing to see the reciept of game ID in header, sent over vai AJAX request on Delete function //         
  	var deleteID = req.headers.id;             // set game ID to a variable for use //
  	db.Game.find( {_id : deleteID }, function (err, game) {      // Stage 1. Querying the DB to find the relevant game using GameID //
  		console.log('Game Found' + game);
  	}).remove(function (err, deleted) {                          // Stage 2. Chaining the remove() on to stage.1 in order to DELETE the GameID // 
  		console.log('Successfully deleted' + deleted);
  	});
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
app.get("/:round", function (req, res) {
	// res.send('hello test 1')
	var roundInfoPath = path.join(views, 'scorePage.html');
	res.sendFile(roundInfoPath);
});


// SPECIFIC COURSE PERFORMANCE
app.get("/:course", function (req, res) {
	// res.send('hello test 1')
	var courseInfoPath = path.join(views, 'course.html');
	res.sendFile(courseInfoPath);
});



// start the server
app.listen(3000, function () {
    console.log("Yeah Buddy! head to localhost:3000/");
});