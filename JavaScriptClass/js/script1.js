(function (window) {
	var malikGreeter = {};
	malikGreeter.name = "Malik";
	var greeting = "Hello ";
	malikGreeter.sayHello = function () {
		console.log(greeting + malikGreeter.name);
	}

	window.malikGreeter = malikGreeter;
	
})(window);