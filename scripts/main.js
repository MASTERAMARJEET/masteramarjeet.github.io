// Parallax.js code
var starBg = document.getElementById('starBg');
var parallaxInstance = new Parallax(starBg);

var jupiter = document.getElementById('jupiter');
var jupiterInstance = new Parallax(jupiter);


// Scroll effect on navbar
let lastScrollY = 0;

window.addEventListener("scroll", scrollFunction)

function scrollFunction() {

	var currentScrollY = document.documentElement.scrollTop;

	if ( currentScrollY > lastScrollY) {
		document.querySelector(".nav-container").style.top = "-80px";
  } else {
		document.querySelector(".nav-container").style.top = "0px";
	}

	lastScrollY = currentScrollY;

}
