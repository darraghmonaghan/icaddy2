var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var gamesSchema = new Schema ({
  date: Date,
  course_id: String, 
  score: [Number],
  putts: [Number],
  // netScore: []	// Need to consider how this will be calculated, Needs to be put into an input form? //
  // NEED TO PUT COURSE NAME HERE????
  courseName: String,
  totalScore: Number
});



var Game = mongoose.model("Game", gamesSchema);
module.exports = Game;