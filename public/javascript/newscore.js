
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
            $('#nett1').val(math);
            maxPutts1();
     }

     function calc2() {
            var score = $('#score2').val();
            var par = $('#par2').val();
            var math = ((score) - (par));
            $('#nett2').val(math);
            maxPutts2();
     }

     function calc3() {
            var score = $('#score3').val();
            var par = $('#par3').val();
            var math = ((score) - (par));
            $('#nett3').val(math);
            maxPutts3();
     }

     function calc4() {
            var score = $('#score4').val();
            var par = $('#par4').val();
            var math = ((score) - (par));
            $('#nett4').val(math);
            maxPutts4();
     }

     function calc5() {
            var score = $('#score5').val();
            var par = $('#par5').val();
            var math = ((score) - (par));
            $('#nett5').val(math);
            maxPutts5();
     }

     function calc6() {
            var score = $('#score6').val();
            var par = $('#par6').val();
            var math = ((score) - (par));
            $('#nett6').val(math);
            maxPutts6();
     }

     function calc7() {
            var score = $('#score7').val();
            var par = $('#par7').val();
            var math = ((score) - (par));
            $('#nett7').val(math);
            maxPutts7();
     }

     function calc8() {
            var score = $('#score8').val();
            var par = $('#par8').val();
            var math = ((score) - (par));
            $('#nett8').val(math);
            maxPutts8();
     }

     function calc9() {
            var score = $('#score9').val();
            var par = $('#par9').val();
            var math = ((score) - (par));
            $('#nett9').val(math);
            maxPutts9();
     }

     function calc10() {
            var score = $('#score10').val();
            var par = $('#par10').val();
            var math = ((score) - (par));
            $('#nett10').val(math);
            maxPutts10();
     }

     function calc11() {
            var score = $('#score11').val();
            var par = $('#par11').val();
            var math = ((score) - (par));
            $('#nett11').val(math);
            maxPutts11();
     }

     function calc12() {
            var score = $('#score12').val();
            var par = $('#par12').val();
            var math = ((score) - (par));
            $('#nett12').val(math);
            maxPutts12();
     }

     function calc13() {
            var score = $('#score13').val();
            var par = $('#par13').val();
            var math = ((score) - (par));
            $('#nett13').val(math);
            maxPutts13();
     }

     function calc14() {
            var score = $('#score14').val();
            var par = $('#par14').val();
            var math = ((score) - (par));
            $('#nett14').val(math);
            maxPutts14();
     }

     function calc15() {
            var score = $('#score15').val();
            var par = $('#par15').val();
            var math = ((score) - (par));
            $('#nett15').val(math);
            maxPutts15();
     }

     function calc16() {
            var score = $('#score16').val();
            var par = $('#par16').val();
            var math = ((score) - (par));
            $('#nett16').val(math);
            maxPutts16();
     }

     function calc17() {
            var score = $('#score17').val();
            var par = $('#par17').val();
            var math = ((score) - (par));
            $('#nett17').val(math);
            maxPutts17();
     }

     function calc18() {
            var score = $('#score18').val();
            var par = $('#par18').val();
            var math = ((score) - (par));
            $('#nett18').val(math);
            maxPutts18();
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
