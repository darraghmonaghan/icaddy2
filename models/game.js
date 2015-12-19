var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var gamesSchema = new Schema ({
  date: Date,
  playingPartners: String,
  course_id: String, 
  score: [Number],
  putts: [Number],
  nettScore: [Number],
  courseName: String,
  totalScore: Number,
  totalPutts: Number
});



var Game = mongoose.model("Game", gamesSchema);
module.exports = Game;