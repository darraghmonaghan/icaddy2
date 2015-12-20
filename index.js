
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
			// console.log('new user created successfully: ' + user);
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

// TEST CHART SHOW
app.get("/chart", function (req, res) {
	var chartPath = path.join(views, 'chart.html');
	res.sendFile(chartPath);
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
		// console.log("Current User details: " + user);
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



// REDUNDANT ROUTE ??? //

app.post('/scorecard', function (req, res) {						
	var submission = req.body;
	var newCourse = new db.Course(submission);
	console.log('request body info here: ');
	console.log(submission);

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
            user.save(function (err, success) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(user.firstname + "'s new game has been entered!");
                	// console.log(success);
                });
			res.redirect('/profile');
	});
});





// GETS COURSE INFORMATION - PAR, YARDAGE, NAME etc. //
app.get('/:course.json', function (req, res) {
	var courseID = req.params.course;
	var course = db.Course.find({_id: courseID}, function (err, course) {
			if (err) {
				console.log('Couldnt find course: ' + err);
			} else {
				// console.log('Course found: ' + course);
				res.send(course);
			}
	});
}); 




// NEW SCORE //
app.get("/:course/newscore", function (req, res) {
	var newScorePath = path.join(views, 'newScore.html');
	res.sendFile(newScorePath);
});


app.post("/:course/newscore", function (req, res) {
	var date = req.body.date;
	var playingPartners = req.body.playingPartners;
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

    db.User.findOne({                 				// querying DB to find the current user via the Session ID //
                _id: req.session.userId
            }, function (err, user) {

			var newScore = new db.Game({date: date, score: score, putts: putts, course_id: courseID, courseName: courseName, totalScore: totalScore, totalPutts: totalPutts, nettScore: nettScore, playingPartners: playingPartners});
			newScore.save(function (err, game) {
				if (err) {
					console.log('error submitting new score to the DB: ' + err);
				} else {
					console.log('1) new score successfully saved to the DB: ' + game);
					
					// NET SCORE TALLYING HERE //	
					for (i = 0; i < nettScore.length; i++) {							
						var number = parseInt(nettScore[i])					// parsing string data into integer for comparison purposes //
						if (number === -3) {								// Starting here with Alatros //
							user.albatrosCount++;
						} else if (number === -2) {
							user.eagleCount++;
						} else if (number === -1) {
							user.birdieCount++;
						} else if (number === 0) {							
							user.parCount++;
						} else if (number === 1) {
							user.bogeyCount++;
						} else if (number === 2) {
							user.doubleBogeyCount++;
						} else if (number >= 3 ) {							// ending here with 'Ouches' //
							user.ouchCount++;
						} user.save(function (err, success) {															// NEED TO REFACTOR TO REDUCE DB ORDERS - PUT OUTSIDE FOR LOOP? //
							if (err) {
								console.log("error in saving Par / Bogey count for user: " + err);
							} else {
								// console.log('user par and bogey count saved: ' + success);
							}
						})
					}
																			// checking for Holes in One //
					for (y = 0; y < score.length; y++) {
						var number = parseInt(score[y]);
						console.log('THE SCORE IS: ' + number);
						console.log(typeof(number));
						if (number === 1) {
							user.aceCount++;
						} user.save(function (err, success) {
							if (err) {
								console.log('error in saving Ace count: ' + err);
							} else {
								console.log('ace count saved successfully: ' + success)
							}
						})
					}
				}
			});
            user.gamesList.push(newScore._id);		// Push the ID of the game to the User profile //
            user.save(function (err, success) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("2)" + user.firstname + "'s new game has been entered!");
                    console.log('3) Ending par count here: ');
					console.log(user.parCount);
					console.log('4) Ending bogey count here: ');
					console.log(user.bogeyCount);
                    console.log('5) Ending birdie count here: ');
					console.log(user.birdieCount);
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


// SPECIFIC ROUND / GAME // 
app.get("/performance/:round", function (req, res) {
	var roundInfoPath = path.join(views, 'scorePage.html');
	res.sendFile(roundInfoPath);
});

// AJAX request to retrieve data //
app.get('/round/:round.json', function (req, res) {
	var roundID = req.params.round;
	var round = db.Game.find({_id: roundID}, function (err, round) {
			if (err) {
				console.log('Couldnt find round: ' + err);
			} else {
				// console.log('Round found: ' + round);
				res.send(round);
			}
	});	
});



// SPECIFIC COURSE PERFORMANCE
app.get("/performances/:course", function (req, res) {
	// res.send('Course Info Here');
	var coursePerformancePath = path.join(views, 'course.html');
	res.sendFile(coursePerformancePath);
});




// start the server
app.listen(3000, function () {
    console.log("Yeah Buddy! head to localhost:3000/");
});