var count =0;
var canvas;
var context;

function drawCircle(posx,posy,size,color){
	canvas = document.getElementById("micanvas");
	context = canvas.getContext('2d');
	context.beginPath();
	context.fillStyle = color;
	context.arc(posx, posy, size, 0, 2 * Math.PI, false);
	context.fill();
	
}


function MakeRandom(color){
	
	posx = Math.floor(Math.random() * 600);
	posy= Math.floor(Math.random() * 600);
	size= 2;
	if(posx>0||posy>0){
		drawCircle(posx,posy,size,color);
			count += 1;
		}

	if (count >= 20 ){
		console.log(count);
	}
}

function Clear(){
	canvas.width = canvas.width;
	
}


window.setInterval("MakeRandom('blue')",4);
window.setInterval("Clear()",3000);



