var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var courseSchema = new Schema ({
  courseName: String,
  par: []
});



var Course = mongoose.model("Course", courseSchema);
module.exports = Course;