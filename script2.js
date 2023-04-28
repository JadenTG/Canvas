const ctz = document.getElementById("myCanvas2").getContext("2d");
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        ctz.save();
        ctz.fillStyle = `rgb(${51 * i}, ${255 -51 * i}, 255)`;
        ctz.translate(30 + j * 80, 30 + i * 80);
        ctz.fillRect(0, 0, 25, 25);
        ctz.restore();
    }
}