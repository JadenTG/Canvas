var c = document.getElementById('myCanvas1')
var ctx = c.getContext("2d")
ctx.moveTo(400,500);
ctx.lineTo(400,200)
ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(0,0,0)";
ctx.lineCap = "round";
ctx.stroke();

ctx.moveTo(200,500);
ctx.lineTo(600,500);
ctx.stroke();

ctx.moveTo(400,200);
ctx.lineTo(600,500);
ctx.stroke();

ctx.moveTo(200,500);
ctx.lineTo(400,200);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 393, 105.5, 0, 2  * Math.PI);
ctx.stroke();