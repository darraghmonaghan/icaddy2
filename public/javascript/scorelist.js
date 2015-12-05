
function getData() {
  $.get('/user.json', function (data) {
    var user = JSON.parse(data);
    console.log('Data received through AJAX in JSON format: ' + user);
    $('#hello').append(user.firstname);    // Get request and then JQuery to welcome user by firstname //

    var games = user.gamesList;

	  var scoresTemplate = _.template($('#scores-template').html());
		
		games.forEach(function(game){
      console.log(game);
			var scoreHtml = scoresTemplate(game);
			$("#scores-placeholder").append(scoreHtml);
		});
	});
};


$(function() {

  getData();

});