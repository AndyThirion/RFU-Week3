// Click handler for adding "thing" to map on click
var clickHandle = function() {

	// If you click on current marker then 2nd click delete
		$(document).on('mousedown', '.marker .fa-map-marker', function(e){
			console.log(this);
			$(this).parent().remove();
			e.stopPropagation();
		});
	
	$(document).on('click', function () {

		console.log(this);

		// Grab mouse position on click
		var mousePosition = [event.pageX, event.pageY];
		console.log(mousePosition);
		console.log(mousePosition[0] + ', ' + mousePosition[1])
		// Creates the marker, not added to document yet
		var marker = $('<div class="marker" style="top: ' + mousePosition[1] + 'px; left: ' + mousePosition[0] + 'px;"><i class="fa fa-map-marker"></i></div>');
		var markerNote = $('<div class="marker-note"><h3>Note:</h3><input type="text"></div>');
		// var marker = $('<div> TEST DIV </div>')
		marker.appendTo('.page-wrapper');
		markerNote.appendTo(marker);
	})

}




$(document).on('ready', function() {
	// Handles click events
	// For adding and removing map markers
	clickHandle()  


});