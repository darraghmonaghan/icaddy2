
function deleteScore(context) {               // Function is called from the ONCLICK attribute in HTML page //
  //console.log(context);
  var deleteID = $(context).data('id');       // Extracting value from Data-ID attribute, taken from INPUT in PROFILE.HTML //
  console.log(deleteID);
  $.ajax({                                  
    url: '/games',                            // AJAX request to DELETE route //
    type: 'DELETE',
    headers: {'ID': deleteID},                // variable deleteID placed into the header being sent //
    // success: function(res) {
      // scoreTemplating()                       // this function is not working yet / or res.redirect on route //
    // }
  });
}



function getData() {
  $.get('/user.json', function (data) {
    var user = JSON.parse(data);
    var ouch = user.ouchCount;
    var doubleBogey = user.doubleBogeyCount;
    var bogey = user.bogeyCount;
    var par = user.parCount;
    var birdie = user.birdieCount;
    var eagle = user.eagleCount;
    var albatros = user.albatrosCount;
    var ace = user.aceCount;

    $('#ouchCount').text(ouch);
    $('#doubleBogeyCount').text(doubleBogey);
    $('#bogeyCount').text(bogey);
    $('#parCount').text(par);
    $('#birdieCount').text(birdie);
    $('#eagleCount').text(albatros);
    $('#albatrosCount').text(eagle); 
    $('#aceCount').text();

    // Need to replicate for %'s //


 
    // $('#hello').append(user.firstname);    // Get request and then JQuery to welcome user by firstname //

    // console.log(typeof(ouchCount));
    // console.log('Ouch Count Here: ' + user.ouchCount);

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