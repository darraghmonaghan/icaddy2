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
                              });
                              summaryData(); // summarizing the shortlisted data for the specific golf course
                              avgPerHole(); // function for avg score per hole
                              avgPuttsHole(); // function for avg putts per hole
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
                first9GrossAvg();
                second9GrossAvg();
            }

            var first9GrossTotal = [];
            var second9GrossTotal = [];

            function avgPerHole1() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].score[0]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                first9GrossTotal.push(scoresSum);
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
                first9GrossTotal.push(scoresSum);
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
                first9GrossTotal.push(scoresSum);
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
                first9GrossTotal.push(scoresSum);
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
                first9GrossTotal.push(scoresSum);
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
                first9GrossTotal.push(scoresSum);
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
                first9GrossTotal.push(scoresSum);
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
                first9GrossTotal.push(scoresSum);
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
                first9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
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
                second9GrossTotal.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgGross18').text(avg);              
            }

            function first9GrossAvg() {
                var scoresSum = first9GrossTotal.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var rounds = requiredGames.length;
                var front9GrossAvg = Math.round((scoresSum / rounds));
                $('#front9avgGross').text(front9GrossAvg);   
            }

            function second9GrossAvg() {
                var scoresSum = second9GrossTotal.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var rounds = requiredGames.length;
                var second9GrossAvg = Math.round((scoresSum / rounds));
                $('#back9avgGross').text(second9GrossAvg); 
            }



            function avgPuttsHole() {
                avgPuttsHole1();
                avgPuttsHole2();
                avgPuttsHole3();
                avgPuttsHole4();
                avgPuttsHole5();
                avgPuttsHole6();
                avgPuttsHole7();
                avgPuttsHole8();                
                avgPuttsHole9();
                avgPuttsHole10();
                avgPuttsHole11();
                avgPuttsHole12();
                avgPuttsHole13();
                avgPuttsHole14();
                avgPuttsHole15();
                avgPuttsHole16();
                avgPuttsHole17();
                avgPuttsHole18();
                first9PuttsAvg();
                second9PuttsAvg();
            }

            var front9PuttsAvg = []; // empty array for calculating total putts for 9 holes;
            var back9PuttsAvg = [];


            function avgPuttsHole1() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[0]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts1').text(avg);              
            }

            function avgPuttsHole2() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[1]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                front9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts2').text(avg);              
            }

            function avgPuttsHole3() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[2]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                front9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts3').text(avg);              
            }

            function avgPuttsHole4() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[3]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                front9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts4').text(avg);              
            }

            function avgPuttsHole5() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[4]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                front9PuttsAvg.push(scoresSum);      
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts5').text(avg);              
            }

            function avgPuttsHole6() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[5]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                front9PuttsAvg.push(scoresSum);       
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts6').text(avg);              
            }

            function avgPuttsHole7() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[6]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                front9PuttsAvg.push(scoresSum);         
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts7').text(avg);              
            }

            function avgPuttsHole8() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[7]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                front9PuttsAvg.push(scoresSum);           
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts8').text(avg);              
            }

            function avgPuttsHole9() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[8]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                front9PuttsAvg.push(scoresSum);       
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts9').text(avg);              
            }

            function avgPuttsHole10() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[9]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts10').text(avg);              
            }

            function avgPuttsHole11() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[10]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts11').text(avg);              
            }

            function avgPuttsHole12() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[11]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts12').text(avg);              
            }

            function avgPuttsHole13() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[12]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts13').text(avg);              
            }

            function avgPuttsHole14() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[13]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts14').text(avg);              
            }

            function avgPuttsHole15() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[14]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts15').text(avg);              
            }

            function avgPuttsHole16() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[15]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts16').text(avg);              
            }

            function avgPuttsHole17() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[16]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts17').text(avg);              
            }

            function avgPuttsHole18() {
                var scores = [];
                var rounds = requiredGames.length;
                
                for (i = 0; i < rounds; i++) {
                    scores.push(requiredGames[i].putts[17]);
                }
                var scoresSum = scores.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                back9PuttsAvg.push(scoresSum);
                var avg = Math.round((scoresSum / rounds));
                $('#avgPutts18').text(avg);              
            }

            function first9PuttsAvg() {
                var scoresSum = front9PuttsAvg.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var rounds = requiredGames.length;
                var front9avgPutts = Math.round((scoresSum / rounds));
                $('#front9avgPutts').text(front9avgPutts);                
            }

            function second9PuttsAvg() {
                var scoresSum = back9PuttsAvg.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                });
                var rounds = requiredGames.length;
                var back9avgPutts = Math.round((scoresSum / rounds));
                $('#back9avgPutts').text(back9avgPutts);              
            }




            var myLineChart = new Chart(ctx).Line(data, options);

            var data = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };











            // AJAX request to retrieve course data, using course ID extracted from URL //

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
                              for (i = 8; i < 17; i++) {
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

