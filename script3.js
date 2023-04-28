const cty = document.getElementById('myCanvas3').getContext('2d');
    
// right rectangles, rotate from rectangle center
cty.fillStyle = "#0095DD";
cty.fillRect(150, 30, 100, 100);

cty.translate(200, 80); // translate to rectangle center
// x = x + 0.5 * width
// y = y + 0.5 * height
cty.rotate((Math.PI / 180) * 25); // rotate
cty.translate(-200, -80); // translate back

// draw grey rect
cty.fillStyle = "#4D4E53";
cty.fillRect(150, 30, 100, 100);