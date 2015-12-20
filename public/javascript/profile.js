
function deleteScore(context) {               // Function is called from the ONCLICK attribute in HTML page //
  //console.log(context);
  var deleteID = $(context).data('id');       // Extracting value from Data-ID attribute, taken from INPUT in PROFILE.HTML //
  // console.log(deleteID);
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

    var totalHoles = (ouch + doubleBogey + bogey + par + birdie + eagle + albatros); 

    // percentages //
    var ouchPercentage = ((ouch / totalHoles) * 100).toFixed(2);
    var doubleBogeyPercentage = ((doubleBogey / totalHoles) * 100).toFixed(2);
    var bogeyPercentage = ((bogey / totalHoles) * 100).toFixed(2);
    var parPercentage = ((par / totalHoles) * 100).toFixed(2);
    var birdiePercentage = ((birdie / totalHoles) * 100).toFixed(2);
    var eaglePercentage = ((eagle / totalHoles) * 100).toFixed(2);
    var albatrosPercentage = ((albatros / totalHoles) * 100).toFixed(2);
    var acePercentage = ((ace / totalHoles) * 100).toFixed(2);

    $('#ouchCount').text(ouch);                   // setter for displaying the values //
    $('#doubleBogeyCount').text(doubleBogey);
    $('#bogeyCount').text(bogey);
    $('#parCount').text(par);
    $('#birdieCount').text(birdie);
    $('#eagleCount').text(albatros);
    $('#albatrosCount').text(eagle); 
    $('#aceCount').text(ace);


    $('#ouchCountPercentage').text(ouchPercentage + '%');                   // setter for displaying the % values //
    $('#doubleBogeyCountPercentage').text(doubleBogeyPercentage + '%');
    $('#bogeyCountPercentage').text(bogeyPercentage + '%');
    $('#parCountPercentage').text(parPercentage + '%');
    $('#birdieCountPercentage').text(birdiePercentage + '%');
    $('#eagleCountPercentage').text(albatrosPercentage + '%');
    $('#albatrosCountPercentage').text(eaglePercentage + '%'); 
    $('#aceCountPercentage').text(acePercentage + '%');

 
    // $('#hello').append(user.firstname);    // Get request and then JQuery to welcome user by firstname //

    var games = user.gamesList;
	  var scoresTemplate = _.template($('#scores-template').html());
		
		games.forEach(function (game){
      // console.log(game);
			var scoreHtml = scoresTemplate(game);
			$("#scores-placeholder").append(scoreHtml);
		});
	});
};


$(function() {

  getData();

});