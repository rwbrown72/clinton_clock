clock_update();

function clock_update() {

	// This area will set the current date
	var today = new Date();           // This will get the current date
	var year = today.getFullYear();   // This will get the current year
	var month = today.getMonth();	  // This will get the month
	var day = today.getDate();		  // This will get the day of the month
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
	document.getElementById('current_date').innerHTML = (month+1) + " / " + day + " / " + year;


	// This area will set the date of the last press conference
	var press_cenference_date = new Date(2015, 11, 5)  // This sets the date of the last press conference - remember that Javascript starts in Jan at month [0]!
	var p_year = press_cenference_date.getFullYear();  // This sets the year of the last press conference
	var p_month = press_cenference_date.getMonth();    // This sets the month of the last press conference
	var p_day = press_cenference_date.getDate();	   // This sets the day of the last press conference
	var p_minute = press_cenference_date.getMinutes(); // This sets the minutes of the last press conference
	var p_second = press_cenference_date.getSeconds(); // This sets the seconds of the last press conference


	// This will do the calculations for the countup clock since the last press conference
	
	//This is used to get the number of years since the last press conference
	var years_since_press_conference = year - p_year; 
	var years_since_press_conference_display;

	if (month + p_month >= 12) {
		years_since_press_conference_display = years_since_press_conference - 1;
	} else {
		years_since_press_conference_display = years_since_press_conference; 
	}


	//This is used to get the number of months from the last press conference but discounted for the years since. This would factor in the number of years. 
	var months_since_press_conference = ((12 - p_month) + month)%12;	
		
	//This will take the number of days in the month minus the date of the press conference to get the number of days since the last press conference. This is using the absoulte value of the resulting number to display the correct number of days. 
	var days_since_press_conference = day - p_day;

	if (days_since_press_conference < 0) {
		days_since_press_conference = number_of_days_previous_month - p_day + day;
		months_since_press_conference = months_since_press_conference - 1;
	}

	// This is a simple calculation to get the minutes from the top of the hour. I didn't have the exact press conference start time so, I assumed it started at the top of the hour. 
	var minutes_since_press_conference = minute - p_minute;

	// This is the same as the minutes variable
	var seconds_since_press_conference = second - p_second;

	
	// Print the information to the screen using getElementById method
	document.getElementById('years').innerHTML   = years_since_press_conference_display;
	document.getElementById('months').innerHTML  = months_since_press_conference;
	document.getElementById('days').innerHTML    = days_since_press_conference;
	document.getElementById('minutes').innerHTML = minutes_since_press_conference;
	document.getElementById('seconds').innerHTML = seconds_since_press_conference;
	
	// This will update the time once per second
	setTimeout(clock_update, 1000)
}
 
