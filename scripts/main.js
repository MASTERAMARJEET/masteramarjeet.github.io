// Parallax.js code
var starBg = document.getElementById('starBg');
var parallaxInstance = new Parallax(starBg);

var jupiter = document.getElementById('jupiter');
var jupiterInstance = new Parallax(jupiter);


// Scroll effect on navbar
// and controlling arrow bounce according to scroll
let lastScrollY = 0;

window.addEventListener("scroll", scrollFunction)

const arrow = document.querySelector(".arrow");

function scrollFunction() {

	// controlling navbar
	var currentScrollY = document.documentElement.scrollTop;

	if ( currentScrollY > lastScrollY) {
		document.querySelector(".nav-container").style.top = "-80px";
  } else {
		document.querySelector(".nav-container").style.top = "0px";
	}

	lastScrollY = currentScrollY;

	// controlling arrow bounce
	if (document.documentElement.scrollTop > 0){
		arrow.classList.remove("arrow-bounce")
	}
	else{
		arrow.classList.add("arrow-bounce")
	}

}