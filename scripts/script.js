var canvas = document.getElementById('canvas-full');
var ctx = canvas.getContext("2d");

function setupCanvas() {
  canvas.width = document.getElementById('nav').clientWidth;
  canvas.height = document.getElementById('nav').clientHeight;
}

setupCanvas();
 
var circle = {x:0,y:0}

var cols=["#FF0000","#475DC7","#EF793E", "#86FB8C", "#FFC0BB"];


function drawcir(){
    console.log("circle.draw")
    this.x = Math.random() *canvas.width;
    this.y = Math.random() *canvas.height;
    ctx.beginPath();
    var randomCol = Math.floor(Math.random()*cols.length);
    var color = cols[randomCol];
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    ctx.fill();
}


document.querySelector('.toggle').onclick = function()
{
	const nav = document.querySelector('.nav');
  const vg = document.querySelector('.vg-img');
	this.classList.toggle('active');
	nav.classList.toggle('active');
  vg.classList.toggle('active');

}

