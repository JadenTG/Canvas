const btv = document.getElementById('myCanvas4').getContext('2d');

const sin = Math.sin(Math.PI / 6);
const cos = Math.cos(Math.PI / 6);
btv.translate(100, 100);
let a = 0;
for (let i = 0; i <= 12; i++) {
    a = Math.floor((255 / 12) * i);
    btv.fillStyle = `rgb(${a}, ${a}, ${a})`;
    btv.fillRect(0, 0, 100, 10);
    btv.transform(cos, sin, -sin, cos, 0, 0);
}

btv.setTransform(-1, 0, 0, 1, 100, 100);
btv.fillStyle = "rgba(255, 128, 255, 0.5)";
btv.fillRect(0, 50, 100, 100);