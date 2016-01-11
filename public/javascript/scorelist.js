

function getData() {
	$.get('/user.json', function (data) {
		var user = JSON.parse(data);
		var games = user.gamesList;
		var scoresTemplate = _.template($('#scores-template').html());
		var xyz = games.length - 1;

		for (i = xyz; i >= 0; --i) {
			printGame(games[i]);
		}

		function printGame(game) {
		    var scoreHtml = scoresTemplate(game);
		    $("#scores-placeholder").append(scoreHtml);            
		}
	
	});
}


// CALLING THE FUNCTION TO GET BASE DATA //

$(function() {

  getData();

});
