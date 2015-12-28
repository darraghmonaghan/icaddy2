
        function displayAll(data) {
                // console.log(data);
                var info = data;
                var par = data[0].par;
                var name = data[0].coursename;
                
                // Adding course name //
                $('#courseName').append(name);
                $('#courseNameVal').val(name);

                // JQuery for adding Par to each hole //
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

                $('#par1').val(par[0]);
                $('#par2').val(par[1]);
                $('#par3').val(par[2]);
                $('#par4').val(par[3]);
                $('#par5').val(par[4]);
                $('#par6').val(par[5]);
                $('#par7').val(par[6]);
                $('#par8').val(par[7]);
                $('#par9').val(par[8]);
                $('#par10').val(par[9]);
                $('#par11').val(par[10]);
                $('#par12').val(par[11]);
                $('#par13').val(par[12]);
                $('#par14').val(par[13]);
                $('#par15').val(par[14]);
                $('#par16').val(par[15]);                               
                $('#par17').val(par[16]);
                $('#par18').val(par[17]);
        }



     // Calculations for Nett Score //
     function calc1() {
            var score = $('#score1').val();
            var par = $('#par1').val();
            var math = ((score) - (par));
            $('#nett1').text(math);
            $('#hiddenNett1').val(math);
            maxPutts1();
            if (math <= -3) {
                $('#score1').css('background-color', 'DarkOrchid');
                $('#score1').css('color', 'white');   
            } else if (math === -2) {
                $('#score1').css('background-color', 'DarkBlue');
                $('#score1').css('color', 'white');   
            } else if (math === -1) {
                $('#score1').css('background-color', 'DodgerBlue');
                $('#score1').css('color', 'white'); 
            } else if (math === 0) {
                $('#score1').css('background-color', 'white');
                $('#score1').css('color', 'gray');  
            } else if (math === 1) {
                $('#score1').css('background-color', 'yellow');
                $('#score1').css('color', 'gray');  
            } else if (math === 2) {
                $('#score1').css('background-color', 'orange');
                $('#score1').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score1').css('background-color', 'red');
                $('#score1').css('color', 'white');  
            }
     }

     function calc2() {
            var score = $('#score2').val();
            var par = $('#par2').val();
            var math = ((score) - (par));
            $('#nett2').text(math);
            $('#hiddenNett2').val(math);
            maxPutts2();            
            if (math <= -3) {
                $('#score2').css('background-color', 'DarkOrchid');
                $('#score2').css('color', 'white');   
            } else if (math === -2) {
                $('#score2').css('background-color', 'DarkBlue');
                $('#score2').css('color', 'white');   
            } else if (math === -1) {
                $('#score2').css('background-color', 'DodgerBlue');
                $('#score2').css('color', 'white'); 
            } else if (math === 0) {
                $('#score2').css('background-color', 'white');
                $('#score2').css('color', 'gray');  
            } else if (math === 1) {
                $('#score2').css('background-color', 'yellow');
                $('#score2').css('color', 'gray');  
            } else if (math === 2) {
                $('#score2').css('background-color', 'orange');
                $('#score2').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score2').css('background-color', 'red');
                $('#score2').css('color', 'white');  
            }
     }

     function calc3() {
            var score = $('#score3').val();
            var par = $('#par3').val();
            var math = ((score) - (par));
            $('#nett3').text(math);
            $('#hiddenNett3').val(math);
            maxPutts3();
            if (math <= -3) {
                $('#score3').css('background-color', 'DarkOrchid');
                $('#score3').css('color', 'white');   
            } else if (math === -2) {
                $('#score3').css('background-color', 'DarkBlue');
                $('#score3').css('color', 'white');   
            } else if (math === -1) {
                $('#score3').css('background-color', 'DodgerBlue');
                $('#score3').css('color', 'white'); 
            } else if (math === 0) {
                $('#score3').css('background-color', 'white');
                $('#score3').css('color', 'gray');  
            } else if (math === 1) {
                $('#score3').css('background-color', 'yellow');
                $('#score3').css('color', 'gray');  
            } else if (math === 2) {
                $('#score3').css('background-color', 'orange');
                $('#score3').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score3').css('background-color', 'red');
                $('#score3').css('color', 'white');  
            }
     }

     function calc4() {
            var score = $('#score4').val();
            var par = $('#par4').val();
            var math = ((score) - (par));
            $('#nett4').text(math);
            $('#hiddenNett4').val(math);
            maxPutts4();
            if (math <= -3) {
                $('#score4').css('background-color', 'DarkOrchid');
                $('#score4').css('color', 'white');   
            } else if (math === -2) {
                $('#score4').css('background-color', 'DarkBlue');
                $('#score4').css('color', 'white');   
            } else if (math === -1) {
                $('#score4').css('background-color', 'DodgerBlue');
                $('#score4').css('color', 'white'); 
            } else if (math === 0) {
                $('#score4').css('background-color', 'white');
                $('#score4').css('color', 'gray');  
            } else if (math === 1) {
                $('#score4').css('background-color', 'yellow');
                $('#score4').css('color', 'gray');  
            } else if (math === 2) {
                $('#score4').css('background-color', 'orange');
                $('#score4').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score4').css('background-color', 'red');
                $('#score4').css('color', 'white');  
            }
     }

     function calc5() {
            var score = $('#score5').val();
            var par = $('#par5').val();
            var math = ((score) - (par));
            $('#nett5').text(math);
            $('#hiddenNett5').val(math);
            maxPutts5();
            if (math <= -3) {
                $('#score5').css('background-color', 'DarkOrchid');
                $('#score5').css('color', 'white');   
            } else if (math === -2) {
                $('#score5').css('background-color', 'DarkBlue');
                $('#score5').css('color', 'white');   
            } else if (math === -1) {
                $('#score5').css('background-color', 'DodgerBlue');
                $('#score5').css('color', 'white'); 
            } else if (math === 0) {
                $('#score5').css('background-color', 'white');
                $('#score5').css('color', 'gray');  
            } else if (math === 1) {
                $('#score5').css('background-color', 'yellow');
                $('#score5').css('color', 'gray');  
            } else if (math === 2) {
                $('#score5').css('background-color', 'orange');
                $('#score5').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score5').css('background-color', 'red');
                $('#score5').css('color', 'white');  
            }
     }

     function calc6() {
            var score = $('#score6').val();
            var par = $('#par6').val();
            var math = ((score) - (par));
            $('#nett6').text(math);
            $('#hiddenNett6').val(math);
            maxPutts6();
            if (math <= -3) {
                $('#score6').css('background-color', 'DarkOrchid');
                $('#score6').css('color', 'white');   
            } else if (math === -2) {
                $('#score6').css('background-color', 'DarkBlue');
                $('#score6').css('color', 'white');   
            } else if (math === -1) {
                $('#score6').css('background-color', 'DodgerBlue');
                $('#score6').css('color', 'white'); 
            } else if (math === 0) {
                $('#score6').css('background-color', 'white');
                $('#score6').css('color', 'gray');  
            } else if (math === 1) {
                $('#score6').css('background-color', 'yellow');
                $('#score6').css('color', 'gray');  
            } else if (ma6h === 2) {
                $('#score1').css('background-color', 'orange');
                $('#score6').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score6').css('background-color', 'red');
                $('#score6').css('color', 'white');  
            }
     }

     function calc7() {
            var score = $('#score7').val();
            var par = $('#par7').val();
            var math = ((score) - (par));
            $('#nett7').text(math);
            $('#hiddenNett7').val(math);
            maxPutts7();
            if (math <= -3) {
                $('#score7').css('background-color', 'DarkOrchid');
                $('#score7').css('color', 'white');   
            } else if (math === -2) {
                $('#score7').css('background-color', 'DarkBlue');
                $('#score7').css('color', 'white');   
            } else if (math === -1) {
                $('#score7').css('background-color', 'DodgerBlue');
                $('#score7').css('color', 'white'); 
            } else if (math === 0) {
                $('#score7').css('background-color', 'white');
                $('#score7').css('color', 'gray');  
            } else if (math === 1) {
                $('#score7').css('background-color', 'yellow');
                $('#score7').css('color', 'gray');  
            } else if (math === 2) {
                $('#score7').css('background-color', 'orange');
                $('#score7').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score7').css('background-color', 'red');
                $('#score7').css('color', 'white');  
            }
     }

     function calc8() {
            var score = $('#score8').val();
            var par = $('#par8').val();
            var math = ((score) - (par));
            $('#nett8').text(math);
            $('#hiddenNett8').val(math);
            maxPutts8();
            if (math <= -3) {
                $('#score8').css('background-color', 'DarkOrchid');
                $('#score8').css('color', 'white');   
            } else if (math === -2) {
                $('#score8').css('background-color', 'DarkBlue');
                $('#score8').css('color', 'white');   
            } else if (math === -1) {
                $('#score8').css('background-color', 'DodgerBlue');
                $('#score8').css('color', 'white'); 
            } else if (math === 0) {
                $('#score8').css('background-color', 'white');
                $('#score8').css('color', 'gray');  
            } else if (math === 1) {
                $('#score8').css('background-color', 'yellow');
                $('#score8').css('color', 'gray');  
            } else if (math === 2) {
                $('#score8').css('background-color', 'orange');
                $('#score8').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score8').css('background-color', 'red');
                $('#score8').css('color', 'white');  
            }
     }

     function calc9() {
            var score = $('#score9').val();
            var par = $('#par9').val();
            var math = ((score) - (par));
            $('#nett9').text(math);
            $('#hiddenNett9').val(math);
            maxPutts9();
            if (math <= -3) {
                $('#score9').css('background-color', 'DarkOrchid');
                $('#score9').css('color', 'white');   
            } else if (math === -2) {
                $('#score9').css('background-color', 'DarkBlue');
                $('#score9').css('color', 'white');   
            } else if (math === -1) {
                $('#score9').css('background-color', 'DodgerBlue');
                $('#score9').css('color', 'white'); 
            } else if (math === 0) {
                $('#score9').css('background-color', 'white');
                $('#score9').css('color', 'gray');  
            } else if (math === 1) {
                $('#score9').css('background-color', 'yellow');
                $('#score9').css('color', 'gray');  
            } else if (math === 2) {
                $('#score9').css('background-color', 'orange');
                $('#score9').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score9').css('background-color', 'red');
                $('#score9').css('color', 'white');  
            }
     }

     function calc10() {
            var score = $('#score10').val();
            var par = $('#par10').val();
            var math = ((score) - (par));
            $('#nett10').text(math);
            $('#hiddenNett10').val(math);            
            maxPutts10();
            if (math <= -3) {
                $('#score10').css('background-color', 'DarkOrchid');
                $('#score10').css('color', 'white');   
            } else if (math === -2) {
                $('#score10').css('background-color', 'DarkBlue');
                $('#score10').css('color', 'white');   
            } else if (math === -1) {
                $('#score10').css('background-color', 'DodgerBlue');
                $('#score10').css('color', 'white'); 
            } else if (math === 0) {
                $('#score10').css('background-color', 'white');
                $('#score10').css('color', 'gray');  
            } else if (math === 1) {
                $('#score10').css('background-color', 'yellow');
                $('#score10').css('color', 'gray');  
            } else if (math === 2) {
                $('#score10').css('background-color', 'orange');
                $('#score10').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score10').css('background-color', 'red');
                $('#score10').css('color', 'white');  
            }
     }

     function calc11() {
            var score = $('#score11').val();
            var par = $('#par11').val();
            var math = ((score) - (par));
            $('#nett11').text(math);
            $('#hiddenNett11').val(math);
            maxPutts11();
            if (math <= -3) {
                $('#score11').css('background-color', 'DarkOrchid');
                $('#score11').css('color', 'white');   
            } else if (math === -2) {
                $('#score11').css('background-color', 'DarkBlue');
                $('#score11').css('color', 'white');   
            } else if (math === -1) {
                $('#score11').css('background-color', 'DodgerBlue');
                $('#score11').css('color', 'white'); 
            } else if (math === 0) {
                $('#score11').css('background-color', 'white');
                $('#score11').css('color', 'gray');  
            } else if (math === 1) {
                $('#score11').css('background-color', 'yellow');
                $('#score11').css('color', 'gray');  
            } else if (math === 2) {
                $('#score11').css('background-color', 'orange');
                $('#score11').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score11').css('background-color', 'red');
                $('#score11').css('color', 'white');  
            }

     }

     function calc12() {
            var score = $('#score12').val();
            var par = $('#par12').val();
            var math = ((score) - (par));
            $('#nett12').text(math);
            $('#hiddenNett12').val(math);
            maxPutts12();
            if (math <= -3) {
                $('#score12').css('background-color', 'DarkOrchid');
                $('#score12').css('color', 'white');   
            } else if (math === -2) {
                $('#score12').css('background-color', 'DarkBlue');
                $('#score12').css('color', 'white');   
            } else if (math === -1) {
                $('#score12').css('background-color', 'DodgerBlue');
                $('#score12').css('color', 'white'); 
            } else if (math === 0) {
                $('#score12').css('background-color', 'white');
                $('#score12').css('color', 'gray');  
            } else if (math === 1) {
                $('#score12').css('background-color', 'yellow');
                $('#score12').css('color', 'gray');  
            } else if (math === 2) {
                $('#score12').css('background-color', 'orange');
                $('#score12').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score12').css('background-color', 'red');
                $('#score12').css('color', 'white');  
            }            
     }

     function calc13() {
            var score = $('#score13').val();
            var par = $('#par13').val();
            var math = ((score) - (par));
            $('#nett13').text(math);
            $('#hiddenNett13').val(math);
            maxPutts13();
            if (math <= -3) {
                $('#score13').css('background-color', 'DarkOrchid');
                $('#score13').css('color', 'white');   
            } else if (math === -2) {
                $('#score13').css('background-color', 'DarkBlue');
                $('#score13').css('color', 'white');   
            } else if (math === -1) {
                $('#score13').css('background-color', 'DodgerBlue');
                $('#score13').css('color', 'white'); 
            } else if (math === 0) {
                $('#score13').css('background-color', 'white');
                $('#score13').css('color', 'gray');  
            } else if (math === 1) {
                $('#score13').css('background-color', 'yellow');
                $('#score13').css('color', 'gray');  
            } else if (math === 2) {
                $('#score13').css('background-color', 'orange');
                $('#score13').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score13').css('background-color', 'red');
                $('#score13').css('color', 'white');  
            }
     }

     function calc14() {
            var score = $('#score14').val();
            var par = $('#par14').val();
            var math = ((score) - (par));
            $('#nett14').text(math);
            $('#hiddenNett14').val(math);
            maxPutts14();
            if (math <= -3) {
                $('#score14').css('background-color', 'DarkOrchid');
                $('#score14').css('color', 'white');   
            } else if (math === -2) {
                $('#score14').css('background-color', 'DarkBlue');
                $('#score14').css('color', 'white');   
            } else if (math === -1) {
                $('#score14').css('background-color', 'DodgerBlue');
                $('#score14').css('color', 'white'); 
            } else if (math === 0) {
                $('#score14').css('background-color', 'white');
                $('#score14').css('color', 'gray');  
            } else if (math === 1) {
                $('#score14').css('background-color', 'yellow');
                $('#score14').css('color', 'gray');  
            } else if (math === 2) {
                $('#score14').css('background-color', 'orange');
                $('#score14').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score14').css('background-color', 'red');
                $('#score14').css('color', 'white');  
            }
     }

     function calc15() {
            var score = $('#score15').val();
            var par = $('#par15').val();
            var math = ((score) - (par));
            $('#nett15').text(math);
            $('#hiddenNett15').val(math);
            maxPutts15();
            if (math <= -3) {
                $('#score15').css('background-color', 'DarkOrchid');
                $('#score15').css('color', 'white');   
            } else if (math === -2) {
                $('#score15').css('background-color', 'DarkBlue');
                $('#score15').css('color', 'white');   
            } else if (mat5 === -1) {
                $('#score15').css('background-color', 'DodgerBlue');
                $('#score15').css('color', 'white'); 
            } else if (math === 0) {
                $('#score15').css('background-color', 'white');
                $('#score15').css('color', 'gray');  
            } else if (math === 1) {
                $('#score15').css('background-color', 'yellow');
                $('#score15').css('color', 'gray');  
            } else if (math === 2) {
                $('#score15').css('background-color', 'orange');
                $('#score15').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score15').css('background-color', 'red');
                $('#score15').css('color', 'white');  
            }
     }

     function calc16() {
            var score = $('#score16').val();
            var par = $('#par16').val();
            var math = ((score) - (par));
            $('#nett16').text(math);
            $('#hiddenNett16').val(math);
            maxPutts16();
            if (math <= -3) {
                $('#score16').css('background-color', 'DarkOrchid');
                $('#score16').css('color', 'white');   
            } else if (math === -2) {
                $('#score16').css('background-color', 'DarkBlue');
                $('#score16').css('color', 'white');   
            } else if (math === -1) {
                $('#score16').css('background-color', 'DodgerBlue');
                $('#score16').css('color', 'white'); 
            } else if (math === 0) {
                $('#score16').css('background-color', 'white');
                $('#score16').css('color', 'gray');  
            } else if (math === 1) {
                $('#score16').css('background-color', 'yellow');
                $('#score16').css('color', 'gray');  
            } else if (math === 2) {
                $('#score16').css('background-color', 'orange');
                $('#score16').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score16').css('background-color', 'red');
                $('#score16').css('color', 'white');  
            }
     }

     function calc17() {
            var score = $('#score17').val();
            var par = $('#par17').val();
            var math = ((score) - (par));
            $('#nett17').text(math);
            $('#hiddenNett17').val(math);
            maxPutts17();
            if (math <= -3) {
                $('#score17').css('background-color', 'DarkOrchid');
                $('#score17').css('color', 'white');   
            } else if (math === -2) {
                $('#score17').css('background-color', 'DarkBlue');
                $('#score17').css('color', 'white');   
            } else if (math === -1) {
                $('#score17').css('background-color', 'DodgerBlue');
                $('#score17').css('color', 'white'); 
            } else if (math === 0) {
                $('#score17').css('background-color', 'white');
                $('#score17').css('color', 'gray');  
            } else if (math === 1) {
                $('#score17').css('background-color', 'yellow');
                $('#score17').css('color', 'gray');  
            } else if (math === 2) {
                $('#score17').css('background-color', 'orange');
                $('#score17').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score17').css('background-color', 'red');
                $('#score17').css('color', 'white');  
            }
     }

     function calc18() {
            var score = $('#score18').val();
            var par = $('#par18').val();
            var math = ((score) - (par));
            $('#nett18').text(math);
            $('#hiddenNett18').val(math);
            maxPutts18();
            if (math <= -3) {
                $('#score18').css('background-color', 'DarkOrchid');
                $('#score18').css('color', 'white');   
            } else if (math === -2) {
                $('#score18').css('background-color', 'DarkBlue');
                $('#score18').css('color', 'white');   
            } else if (math === -1) {
                $('#score18').css('background-color', 'DodgerBlue');
                $('#score18').css('color', 'white'); 
            } else if (math === 0) {
                $('#score18').css('background-color', 'white');
                $('#score18').css('color', 'gray');  
            } else if (math === 1) {
                $('#score18').css('background-color', 'yellow');
                $('#score18').css('color', 'gray');  
            } else if (math === 2) {
                $('#score18').css('background-color', 'orange');
                $('#score18').css('color', 'white');                  
            } else if (math >= 3) {
                $('#score18').css('background-color', 'red');
                $('#score18').css('color', 'white');  
            }
     }

     // Calculations for Maximum Putts on each hole //

     function maxPutts1() {
            var max = ($('#score1').val() - 1);
            $('#putts1').attr('max', max);
     }

     function maxPutts2() {
            var max = ($('#score2').val() - 1);
            $('#putts2').attr('max', max);
     }

     function maxPutts3() {
            var max = ($('#score3').val() - 1);
            $('#putts3').attr('max', max);
     }

     function maxPutts4() {
            var max = ($('#score4').val() - 1);
            $('#putts4').attr('max', max);
     }

     function maxPutts5() {
            var max = ($('#score5').val() - 1);
            $('#putts5').attr('max', max);
     }

     function maxPutts6() {
            var max = ($('#score6').val() - 1);
            $('#putts6').attr('max', max);
     }

     function maxPutts7() {
            var max = ($('#score7').val() - 1);
            $('#putts7').attr('max', max);
     }

     function maxPutts8() {
            var max = ($('#score8').val() - 1);
            $('#putts8').attr('max', max);
     }

     function maxPutts9() {
            var max = ($('#score9').val() - 1);
            $('#putts9').attr('max', max);
     }

     function maxPutts10() {
            var max = ($('#score10').val() - 1);
            $('#putts10').attr('max', max);
     }

     function maxPutts11() {
            var max = ($('#score11').val() - 1);
            $('#putts11').attr('max', max);
     }

     function maxPutts12() {
            var max = ($('#score12').val() - 1);
            $('#putts12').attr('max', max);
     }

     function maxPutts13() {
            var max = ($('#score13').val() - 1);
            $('#putts13').attr('max', max);
     }

     function maxPutts14() {
            var max = ($('#score14').val() - 1);
            $('#putts14').attr('max', max);
     }

     function maxPutts15() {
            var max = ($('#score15').val() - 1);
            $('#putts15').attr('max', max);
     }

     function maxPutts16() {
            var max = ($('#score16').val() - 1);
            $('#putts16').attr('max', max);
     }

     function maxPutts17() {
            var max = ($('#score17').val() - 1);
            $('#putts17').attr('max', max);
     }

     function maxPutts18() {
            var max = ($('#score18').val() - 1);
            $('#putts18').attr('max', max);
     }



     $items = $('#numberOfItems').val();
     $weightitem = $('#weightitem').val();


        // AJAX request to get course data - name, par etc. //
        function courseData() {
            var pathArray = window.location.pathname.split('/');
            var courseID = pathArray[1]; 
            var customURL = "/" + courseID + '.json'           
            // REGEX to extract the course ID
            $('#courseID').val(courseID);

            // 1. AJAX request to get course info, querying DB using courseID
            $.ajax({
                    url: customURL,
                    type: 'GET',
                    datatype: 'json',
                    success: displayAll
            });
        };

        $(function() {

            courseData();

        });
