var canvas = document.getElementById('canvas-full');
var ctx = canvas.getContext("2d");
const pr3 = document.getElementById('pr3');

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



$(document).ready(function(){
  $('body').mousemove(function(e){
    var pageX; // get mouse coordinates
    var pageY;
    var amountMovedX = (e.pageX * -1 / 40); // divide them to get smaller number
    var amountMovedY = (e.pageY * -1 / 40);
    
    $('.create').css('transform','translate('+ (-amountMovedX)+'px, '+ (amountMovedY)+'px)');
    $('.develop').css('transform','translate('+amountMovedX+'px, '+amountMovedY+'px)');
    $('.design').css('transform','translate('+(amountMovedY)+'px, '+(amountMovedX-10)+'px)'); 
  });
});





var $window = $(window);
var $holder = $("#slides-holder");
var $slides = $holder.find(".slide");

$slides.each(function(index, element) {
  $(element).css("z-index", 100 + index).after($("<div />", {
    class: "slide-fake-height"
  }));
});

var $fakeHeights = $slides.next(".slide-fake-height");
var $toReize = $holder.add($slides).add($fakeHeights);
var scrollFixer = 3;

$window.on("resize", onResize).resize();

$window.on("scroll", function(event) {
  ( !! window.requestAnimationFrame) ? requestAnimationFrame(onScroll) : onScroll();
});

function onResize(event) {
  $toReize.css({
    height: $window.innerHeight() + "px"
  });
  onScroll();
}



function onScroll(event) {
  
  var scrollTop = Math.abs($window.scrollTop()) + scrollFixer;
  
  $slides.each(function(index, element) {
    
    var $slide = $(element);
    var $fakeHeight = $slide.next(".slide-fake-height");
    
    //This can be optimised a lot, but this is just a demo effect
    var slideTop = $slide.hasClass("fixed") ? $fakeHeight.offset().top : $slide.offset().top;
    if (slideTop < scrollTop ) {
      $slide.addClass("fixed");
      $fakeHeight.addClass("visible");
    } else {
      $slide.removeClass("fixed");
      $fakeHeight.removeClass("visible");
    }
  });
  isInViewport(pr3);
}








function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ){document.getElementById("example").style.opacity = "0";}
      else{document.getElementById("example").style.opacity = "1";}
}