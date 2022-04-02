document.addEventListener('DOMContentLoaded', function() {
    $('.email-btn.copy').attr('data-text', "copy");
}, false);


var email = ['copied'];


function copyEmail(){
	navigator.clipboard.writeText("vasilis.gvr@gmail.com");
	$('.email-btn.copy').attr('data-text', email[0]);
}


confettiBtn.addEventListener("click", () => {
  confetti("tsparticles", {
    angle: 90,
    count: 40,
    position: { x: 50, y:70 },
    spread: 90,
    startVelocity: 60,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    colors: ["#FFC0CB", "#4646F0"],
    shapes: ["square", "circle"],
    scalar: 1,
    zIndex: 2000000,
    disableForReducedMotion: true
  });
});
