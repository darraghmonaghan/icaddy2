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
                              summaryData(); // summarizing the shortlisted data for the specific golf course
                              avgPerHole(); // function 
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
                $('#noOfRounds').append(Rounds);
                var totalGross = 0;
                var totalPutts = 0;
                var totalNett = 0;

                var mostRecentGame = requiredGames[0].date;
                for (i = 0; i < requiredGames.length; i++) {
                    if (requiredGames[i].date > mostRecentGame) {
                        mostRecentGame = requiredGames[i].date;
                    }
                }
                $('#lastGameDate').append(mostRecentGame);


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





            function avgPerHole() {
                avgPerHole1();
                avgPerHole2();
                avgPerHole3();
                avgPerHole4();
                avgPerHole5();
                avgPerHole6();
                avgPerHole7();
                avgPerHole8();                
                avgPerHole9();
                avgPerHole10();
                avgPerHole11();
                avgPerHole12();
                avgPerHole13();
                avgPerHole14();
                avgPerHole15();
                avgPerHole16();
                avgPerHole17();
                avgPerHole18();
            }


            function avgPerHole1() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[0]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross1').text(avg);              
            }

            function avgPerHole2() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[1]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross2').text(avg);              
            }

            function avgPerHole3() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[2]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross3').text(avg);              
            }

            function avgPerHole4() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[3]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross4').text(avg);              
            }

            function avgPerHole5() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[4]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross5').text(avg);              
            }

            function avgPerHole6() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[5]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross6').text(avg);              
            }

            function avgPerHole7() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[6]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross7').text(avg);              
            }

            function avgPerHole8() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[7]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross8').text(avg);              
            }

            function avgPerHole9() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[8]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross9').text(avg);              
            }

            function avgPerHole10() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[9]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross10').text(avg);              
            }

            function avgPerHole11() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[10]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross11').text(avg);              
            }

            function avgPerHole12() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[11]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross12').text(avg);              
            }

            function avgPerHole13() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[12]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross13').text(avg);              
            }

            function avgPerHole14() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[13]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross14').text(avg);              
            }

            function avgPerHole15() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[14]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross15').text(avg);              
            }

            function avgPerHole16() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[15]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross16').text(avg);              
            }

            function avgPerHole17() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[16]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross17').text(avg);              
            }

            function avgPerHole18() {
                var scores = [];
                var rounds = requiredGames.length;

                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[17]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross18').text(avg);              
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
                              console.log(data);
                              var name = data[0].coursename;
                              $('#courseName').append(name);
                              $('#par1').text(data[0].par[0]);
                              $('#par2').text(data[0].par[1]);
                              $('#par3').text(data[0].par[2]);
                              $('#par4').text(data[0].par[3]);
                              $('#par5').text(data[0].par[4]);
                              $('#par6').text(data[0].par[5]);
                              $('#par7').text(data[0].par[6]);
                              $('#par8').text(data[0].par[7]);
                              $('#par9').text(data[0].par[8]);                                                                                                                                                      
                              $('#par10').text(data[0].par[9]);
                              $('#par11').text(data[0].par[10]);
                              $('#par12').text(data[0].par[11]);
                              $('#par13').text(data[0].par[12]);
                              $('#par14').text(data[0].par[13]);
                              $('#par15').text(data[0].par[14]);
                              $('#par16').text(data[0].par[15]);
                              $('#par17').text(data[0].par[16]);
                              $('#par18').text(data[0].par[17]);

                              front9ParArray = [];
                              for (i = 0; i < 8; i++) {
                                  front9ParArray.push(data[0].par[i]);
                              }
                              front9Par = front9ParArray.reduce(function (previousValue, currentValue, currentIndex, array) {
                                  return previousValue + currentValue;
                              });
                              console.log(front9Par);
                              $('#front9par').text(front9Par);


                              back9ParArray = [];
                              for (i = 0; i < 8; i++) {
                                  back9ParArray.push(data[0].par[i]);
                              }
                              back9Par = back9ParArray.reduce(function (previousValue, currentValue, currentIndex, array) {
                                  return previousValue + currentValue;
                              });
                              console.log(back9Par);
                              $('#back9par').text(back9Par);


                              // Assign yardages to average hole performance //
                              $('#yardage1').text(data[0].yardage[0]);
                              $('#yardage2').text(data[0].yardage[1]);
                              $('#yardage3').text(data[0].yardage[2]);
                              $('#yardage4').text(data[0].yardage[3]);
                              $('#yardage5').text(data[0].yardage[4]);
                              $('#yardage6').text(data[0].yardage[5]);
                              $('#yardage7').text(data[0].yardage[6]);
                              $('#yardage8').text(data[0].yardage[7]);
                              $('#yardage9').text(data[0].yardage[8]);                                                                                                                                                      
                              $('#yardage10').text(data[0].yardage[9]);
                              $('#yardage11').text(data[0].yardage[10]);
                              $('#yardage12').text(data[0].yardage[11]);
                              $('#yardage13').text(data[0].yardage[12]);
                              $('#yardage14').text(data[0].yardage[13]);
                              $('#yardage15').text(data[0].yardage[14]);
                              $('#yardage16').text(data[0].yardage[15]);
                              $('#yardage17').text(data[0].yardage[16]);
                              $('#yardage18').text(data[0].yardage[17]);

                              front9YardageArray = [];
                              for (i = 0; i < 8; i++) {
                                  front9YardageArray.push(data[0].yardage[i]);
                              }
                              front9Yardage = front9YardageArray.reduce(function (previousValue, currentValue, currentIndex, array) {
                                  return previousValue + currentValue;
                              });
                              $('#front9yardage').text(front9Yardage);


                              back9YardageArray = [];
                              for (i = 0; i < 8; i++) {
                                  back9YardageArray.push(data[0].yardage[i]);
                              }
                              back9Yardage = back9YardageArray.reduce(function (previousValue, currentValue, currentIndex, array) {
                                  return previousValue + currentValue;
                              });
                              $('#back9yardage').text(back9Yardage);

                        }
                });
            }


            $(function() {
                currentUserData();
                courseData();
            });

