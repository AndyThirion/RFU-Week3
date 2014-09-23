// *******************************************
// 					Layout
// *******************************************

var minutes = 0;
var hours = 0;
var minutesString;

// Function that handles updating clockText once per second
var myTime = function() {
	hours = 12;
	minutes = 0;
	clockText.text("12:00");

	setInterval(function() {
		// Increment minutes/hours

		clockText.text(incrementMinute());
	}, 1000)
}

var resetTime = function () {
	hours = 12;
	minutes = 0;
	clockText.text("12:00");
}

var resetClock = function() {

	$(document).on('click', '.reset-clock', resetTime)
}

// Function that handles incrementing minutes into hours and formatting them correctly
var incrementMinute = function() {
	minutes += 1;
	minutesString = minutes.toString();
	hoursString = hours.toString();

	if (minutes < 10) {
		minutesString = "0" + minutesString;
	}
	if (minutes == 60) {
		minutes = 0;
		minutesString = "00";
		hours += 1;
	}
	if (hours < 10) {
		hoursString = "0" + hours;
	}
	if (hours > 12){
		hours = 1;
		hoursString = "01";
		// Insert code to activate/deactivate PM indicator
	}
	return hoursString + ":" + minutesString;
}



// Create our DOM elements that will model the different parts of the clock
var container = $('.container');
var outerShell = $('<div class="outer-shell"></div>');
var innerShell = $('<div class="inner-shell"></div>');
var leftAmPmAuto = $('<div class="left-am-pm-auto"><ol><li>PM</li><li>AUTO</li></ol></div>');
var clockScreen = $('<div class="clock-screen"></div>');
var amPmIndicator = $('<div class="am-pm-indicator"><i class="fa fa-circle"></i></div>');
var clockText = $('<div class="clock-text"></div>');
var bottomAmLabel = $('<div class="bottom-am-label">AM   53 60 70 90 110 140 170</div>');
var bottomFmLabel = $('<div class="bottom-fm-label">FM 88 92 96 102 106 108</div>');


// Create a function to assemble (build) the clock from these parts
var buildClock = function() {
	outerShell.appendTo(container);
		innerShell.appendTo(outerShell);
			leftAmPmAuto.appendTo(innerShell);
			clockScreen.appendTo(innerShell);
				amPmIndicator.appendTo(clockScreen);
				clockText.appendTo(clockScreen);
			bottomAmLabel.appendTo(innerShell);
			bottomFmLabel.appendTo(innerShell);
}

var flashClock = function() {

	setInterval(function() {
		$('.clock-text').toggleClass('flash-off');
	}, 500);

	// setTimeout(function() {
	// 	$('.clock-text').addClass('flash-off');
	// }, 500);
	// setTimeout(function() {
	// 	$('.clock-text').removeClass('flash-off');
	// }, 1000);


	// $(document).on('click', document, function() {
	// 	$('.clock-text').addClass('flash-off');
	// }
	// )
}


$(document).on('ready', function() {
  buildClock();
  // flashClock();
  myTime();
  resetClock();
});