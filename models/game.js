var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var gamesSchema = new Schema ({
  date: Date,
  course_id: String, 
  score: [Number],
  putts: [Number],
  nettScore: [Number],	// Need to consider how this will be calculated, Needs to be put into an input form? //
  courseName: String,
  totalScore: Number,
  totalPutts: Number
});



var Game = mongoose.model("Game", gamesSchema);
module.exports = Game;