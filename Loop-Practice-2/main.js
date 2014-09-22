

// Alias print for console.log(animals[i]);
var print = function(input) {
	console.log(animals[input]);
}

// Declare our array
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// EX 1:
// 		rat cat butterfly marmot

var exOne = function() {
	console.log("Exercise 1:")
	for (var i = 0; i < 4; i++) {
		console.log(animals[i]);
	}
}

// EX 2:
// 		rat butterfly ocelot
// 		0, 2, 4

var exTwo = function() {
	console.log("\nExercise 2:")
	for (var i = 0; i < 5; i += 2 ) {
		console.log(animals[i]);
	}
}


// EX 3:
// 		ocelot marmot butterfly cat rat
// 		4, 3, 2, 1, 0

var exThree = function() {
	console.log("\nExercise 3:")
	for (var i = 4; i >= 0; i--) {
		print(i);
	}
}


// EX 4:
// 		rat cat cat butterfly butterfly marmot marmot ocelot
// 		0, 1, 1, 2, 2, 3, 3, 4

var exFour = function() {
	console.log("\nExercise 4:")
	for (var i = 0; i < 5; i++) {
		if (i == 1 || i == 2 || i== 3) {
			print(i);
			print(i);
		} else {
			print(i);
		}

	}
}


$(document).on('ready', function() {
  exOne();
  exTwo();
  exThree();
  exFour();
});