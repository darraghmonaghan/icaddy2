var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var gamesSchema = new Schema ({
  date: Date,
  course_id: Number, 
  Score: [],
  netScore: []
});



var Game = mongoose.model("Game", gamesSchema);
module.exports = Game;