
Index


// User

var userSchema = new Schema ({
	firstname: {type: String, required: true},
	surname: {type: String, required: true},
	email: {type: String, required: true},
	passwordDigest: {type: String, required: true},
	gamesList: [{type: Schema.Types.ObjectId, ref: 'Game'}]
});

// Game

var gamesSchema = new Schema ({
  date: Date,
  course_id: Number, 
  grossScore: [],
  netScore: []
});


// Course

var courseSchema = new Schema ({
  name: String,
  par: []
});

