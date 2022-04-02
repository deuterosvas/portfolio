// https://codepen.io/thebalu/pen/NqErJO

 $(function() {
   var moveLeft = 20;
   var moveDown = -100;

   $('span.trigger').hover(function(e) {
     $('div#pop-up').show();
     //.css('top', e.pageY + moveDown)
     //.css('left', e.pageX + moveLeft)
     //.appendTo('body');
   }, function() {
     $('div#pop-up').hide();
   });

   $('span.trigger').mousemove(function(e) {
     $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
   });

 });

// https://codepen.io/monkeyslunch/pen/pNwMaL

 $(window).scroll(function() {
var theta = $(window).scrollTop() / 600 % Math.PI;
$('#ban').css({ transform: 'rotate(' + theta + 'rad)' });
});