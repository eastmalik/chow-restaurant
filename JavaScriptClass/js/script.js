var message = "in global";
console.log("global: message = " + message);

var a = function (){
	var messge = "inside a";
	console.log("a: message = " + message);

	function b (){
	console.log("b: message = " + message);
}

	b();
}



a();