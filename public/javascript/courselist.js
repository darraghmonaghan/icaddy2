

function courseList() {
  $.get('/user.json', function (data) {
    var user = JSON.parse(data);
    var courses = user.courseList;
 	// console.log('Data received through AJAX in JSON format: ' + user);
	// console.log('Course List Here: ' + user.courseList);

		var courseTemplate = _.template($('#courseList-template').html());
		
		courses.forEach(function(course){
			console.log(course);
			var courseHtml = courseTemplate(course);
			$("#courseList-placeholder").append(courseHtml);
		});
	});
};



$(function() {

	courseList();

});