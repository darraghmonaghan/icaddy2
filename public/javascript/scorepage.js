
              // AJAX request to get course data - name, par etc. //
            function roundData() {
                var pathArray = window.location.pathname.split('/');
                var roundID = pathArray[2]; 
                var customURL = "/round/" + roundID + '.json';
                // console.log(roundID);           
                // REGEX to extract the course ID

                // 1. AJAX request to get course info, querying DB using courseID
                $.ajax({
                        url: customURL,
                        type: 'GET',
                        datatype: 'json',
                        success: function(data) {
                              console.log(data);
                              var info = data[0];

                              var courseName = info.courseName;
                              $('#courseName').append(courseName);

                              var playingPartners = info.playingPartners;
                              $('#playingPartners').append(playingPartners);

                              var comments = info.comments;
                              $('#comments').append(comments);

                              var monthNames = [
                                "January", "February", "March",
                                "April", "May", "June", "July",
                                "August", "September", "October",
                                "November", "December"
                              ];
                              var gameDate = info.date;
                              var slicedDate = gameDate.slice(0, 9);
                              $('#gameDate').append(slicedDate);


                              var nett = info.nettScore;
                              $('#nett1').text(nett[0]);
                              $('#nett2').text(nett[1]);
                              $('#nett3').text(nett[2]);
                              $('#nett4').text(nett[3]);
                              $('#nett5').text(nett[4]);
                              $('#nett6').text(nett[5]);
                              $('#nett7').text(nett[6]);
                              $('#nett8').text(nett[7]);
                              $('#nett9').text(nett[8]);
                              $('#nett10').text(nett[9]);
                              $('#nett11').text(nett[10]);
                              $('#nett12').text(nett[11]);
                              $('#nett13').text(nett[12]);
                              $('#nett14').text(nett[13]);
                              $('#nett15').text(nett[14]);
                              $('#nett16').text(nett[15]);
                              $('#nett17').text(nett[16]);
                              $('#nett18').text(nett[17]);
                              var nettTotal = nett.reduce(function (previousValue, currentValue, currentIndex, array) {
                                            return previousValue + currentValue;
                                          });
                                          $('#nettTotal').text(nettTotal);


                              var putts = info.putts;
                              $('#putts1').text(putts[0]);
                              $('#putts2').text(putts[1]);
                              $('#putts3').text(putts[2]);
                              $('#putts4').text(putts[3]);
                              $('#putts5').text(putts[4]);
                              $('#putts6').text(putts[5]);
                              $('#putts7').text(putts[6]);
                              $('#putts8').text(putts[7]);
                              $('#putts9').text(putts[8]);
                              $('#putts10').text(putts[9]);
                              $('#putts11').text(putts[10]);
                              $('#putts12').text(putts[11]);
                              $('#putts13').text(putts[12]);
                              $('#putts14').text(putts[13]);
                              $('#putts15').text(putts[14]);
                              $('#putts16').text(putts[15]);
                              $('#putts17').text(putts[16]);
                              $('#putts18').text(putts[17]); 

                              var totalPutts = info.totalPutts;
                              $('#puttsTotal').text(totalPutts); 

                              var score = info.score;
                              $('#score1').text(score[0]);
                              $('#score2').text(score[1]);
                              $('#score3').text(score[2]);
                              $('#score4').text(score[3]);
                              $('#score5').text(score[4]);
                              $('#score6').text(score[5]);
                              $('#score7').text(score[6]);
                              $('#score8').text(score[7]);
                              $('#score9').text(score[8]);
                              $('#score10').text(score[9]);
                              $('#score11').text(score[10]);
                              $('#score12').text(score[11]);
                              $('#score13').text(score[12]);
                              $('#score14').text(score[13]);
                              $('#score15').text(score[14]);
                              $('#score16').text(score[15]);
                              $('#score17').text(score[16]);
                              $('#score18').text(score[17]);

                              var totalScore = info.totalScore;
                              $('#scoreTotal').text(totalScore);

                              var courseIdURL = "/" + info.course_id + '.json';

                              $.ajax({
                                  url: courseIdURL,
                                  type: 'GET',
                                  datatype: 'json',
                                  success: function(courseData) {
                                      // console.log(courseData);
                                      var info2 = courseData[0];
                                      var par = info2.par;
                                          $('#par1').text(par[0]);
                                          $('#par2').text(par[1]);
                                          $('#par3').text(par[2]);
                                          $('#par4').text(par[3]);
                                          $('#par5').text(par[4]);
                                          $('#par6').text(par[5]);
                                          $('#par7').text(par[6]);
                                          $('#par8').text(par[7]);
                                          $('#par9').text(par[8]);
                                          $('#par10').text(par[9]);
                                          $('#par11').text(par[10]);
                                          $('#par12').text(par[11]);
                                          $('#par13').text(par[12]);
                                          $('#par14').text(par[13]);
                                          $('#par15').text(par[14]);
                                          $('#par16').text(par[15]);
                                          $('#par17').text(par[16]);
                                          $('#par18').text(par[17]);

                                          var coursePar = par.reduce(function (previousValue, currentValue, currentIndex, array) {
                                            return previousValue + currentValue;
                                          });
                                          $('#parTotal').text(coursePar);


                                      var yardage = info2.yardage;
                                          $('#yardage1').text(yardage[0]);
                                          $('#yardage2').text(yardage[1]);
                                          $('#yardage3').text(yardage[2]);
                                          $('#yardage4').text(yardage[3]);
                                          $('#yardage5').text(yardage[4]);
                                          $('#yardage6').text(yardage[5]);
                                          $('#yardage7').text(yardage[6]);
                                          $('#yardage8').text(yardage[7]);
                                          $('#yardage9').text(yardage[8]);
                                          $('#yardage10').text(yardage[9]);
                                          $('#yardage11').text(yardage[10]);
                                          $('#yardage12').text(yardage[11]);
                                          $('#yardage13').text(yardage[12]);
                                          $('#yardage14').text(yardage[13]);
                                          $('#yardage15').text(yardage[14]);
                                          $('#yardage16').text(yardage[15]);
                                          $('#yardage17').text(yardage[16]);
                                          $('#yardage18').text(yardage[17]);

                                          var courseYardage = yardage.reduce(function (previousValue, currentValue, currentIndex, array) {
                                            return previousValue + currentValue;
                                          });
                                          $('#yardageTotal').text(courseYardage);
                                  }
                              })

                        }
                });
            };

            $(function() {

                roundData();

            });
