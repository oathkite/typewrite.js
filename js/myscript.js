window.onload = function() {
	draw();
}

var draw = function() {
	var canvas = document.getElementById('mycanvas');
	if (!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');
	
	ctx.fillRect(10,10,50,50);
	ctx.clearRect(20,20,20,20);
	
}