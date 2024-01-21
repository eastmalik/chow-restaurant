(function (window) {
	var mickalaGreeter = {};
	mickalaGreeter.name = "Mickala";
	var greeting = "Hi ";
	mickalaGreeter.sayHi = function () {
	console.log(greeting + mickalaGreeter.name);
	}
	window.mickalaGreeter = mickalaGreeter;
	
});