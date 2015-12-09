  var requiredGames = [];  

            // AJAX request to get course data - name, par etc. //
            function currentUserData() {
                var pathArray = window.location.pathname.split('/');
                var courseID = pathArray[2];
  
                $.ajax({
                        url: "/user.json",
                        type: 'GET',
                        datatype: 'json',
                        success: function(data) {
                        
                              var parsed = JSON.parse(data);
                              parsed.gamesList.forEach(function (game) {
                                    if (game.course_id === courseID) {
                                        requiredGames.push(game);
                                              console.log('game pushed to requiredGames[]');
                                              var roundsTemplate = _.template($('#rounds-template').html());
                                              var roundsHtml = roundsTemplate(game);
                                              $("#rounds-placeholder").append(roundsHtml);
                                    } else {
                                        console.log('wrong courseID, game not pushed');
                                    }
                                    // console.log('Step 1 Here: '); // This part actually shows the full requiredGames Array;
                                    // console.log(requiredGames);
                              });
                              console.log('Step 2 Here: ');
                              summaryData(); // summarizing the shortlisted data for the specific golf course
                        }
                });
            };



            function summaryData() {
                console.log(requiredGames);
                var bestGross = requiredGames[0].totalScore;
                var bestPutts;
                var bestNett;

                var meanGross;
                var meanPutts;
                var meanNett;

                var worstGross = requiredGames[0].totalScore;
                var worstPutts;
                var worstNett;

                // calculating the BEST round info
                for (i = 0; i < requiredGames.length; i++) {
                    if (requiredGames[i].totalScore < bestGross) {
                        var bestGross = requiredGames[i].totalScore;
                        var bestPutts = requiredGames[i].totalPutts;
                        var bestNett = requiredGames[i].nettScore.reduce(function (previousValue, currentValue, currentIndex, array) {
                              return previousValue + currentValue;
                        });                          
                    }
                }
                $('#bestGross').text(bestGross);
                $('#bestPutts').text(bestPutts);
                $('#bestNett').text(bestNett);


                // calculating the WORST round info
                for (i = 0; i < requiredGames.length; i++) {
                    if (requiredGames[i].totalScore > worstGross) {
                        var worstGross = requiredGames[i].totalScore;
                        var worstPutts = requiredGames[i].totalPutts;
                        var worstNett = requiredGames[i].nettScore.reduce(function (previousValue, currentValue, currentIndex, array) {
                              return previousValue + currentValue;
                        });                       
                    }
                }
                // PUT JQuery in here
                $('#worstGross').text(worstGross);
                $('#worstPutts').text(worstPutts);
                $('#worstNett').text(worstNett);


                // Calculating MEAN score //
                var Rounds = requiredGames.length;
                var totalGross = 0;
                var totalPutts = 0;
                var totalNett = 0;

                for (i = 0; i < requiredGames.length; i++) {
                    totalGross += requiredGames[i].totalScore;
                    totalPutts += requiredGames[i].totalPutts;
                    totalNett += requiredGames[i].nettScore.reduce(function (previousValue, currentValue, currentIndex, array) {
                              return previousValue + currentValue;
                        });
                }
                var meanGross = (totalGross / Rounds);
                var meanPutts = (totalPutts / Rounds);
                var meanNett = (totalNett / Rounds);
                $('#meanGross').text(Math.round(meanGross));
                $('#meanPutts').text(Math.round(meanPutts));
                $('#meanNett').text(Math.round(meanNett));  
            }


            function courseData() {
                var pathArray = window.location.pathname.split('/');
                var courseID = pathArray[2];
                var customURL = '/' + courseID + '.json';

                $.ajax({
                        url: customURL,
                        type: 'GET',
                        datatype: 'json',
                        success: function(data) {
                              var name = data[0].coursename;
                              $('#courseName').append(name);
                        }
                });
            }


            $(function() {
                currentUserData();
                courseData();
            });

