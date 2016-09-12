$("button").mouseover(function(){

		$("#trump_face").hide("slow");
		$('nav').hide("slow");

		var width = $(window).width();
		var height = $(window).height();

		var rand_l = (width/Math.random() )%width;
		var rand_t = (height/Math.random() )%height;

		function animate() {
			$("#trump").css({"transition": "left 1.5s", "transition":".5s"});
			$("#trump").css("left", rand_l);
			$("#trump").css("top", rand_t);
		}

		animate();

});



	// This area will set the current date
	var today = new Date();           // This will get the current date
	var year = today.getFullYear();   // This will get the current year
	var month = today.getMonth();	  // This will get the month
	var day = today.getDate();		  // This will get the day of the month
	var hour = today.getHours();
	var minute = today.getMinutes();  // This will get the minutes of the day
	var second = today.getSeconds();  // This will get the seconds of the day
	var last_month = month - 1;		  // This will get the previous month

	// This next line will get the last day of the previous month. 
	var previous_month_last_day = new Date(year, month, 0); 
	var number_of_days_previous_month = previous_month_last_day.getDate(); // This will get the last day of the previous month so that we can calculate the number of days to the press conference date when the date is less than the press conference date. i.e.  today is the first and the last pressconference was on the 5th. This is how to handle this situation while making it dynamic. I'm sure there is a better way and I'd love some input if you have time! Thanks! 

	// This should catch the edge case for January
	if (month == 0) {
		number_of_days_previous_month = new Date(year - 1, month, day - 1);
	}

	// This will display the current date in the title area of the page
	document.getElementById('current_date').innerHTML = (month+1) + "/" + day + "/" + year;