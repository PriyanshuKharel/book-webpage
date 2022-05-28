var btn = document.getElementById("buttonID");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    		btn.style.display = "block";
  	} else {
    		btn.style.display = "none";
  	}
}

function scrolltop() {
  	document.body.scrollTop = 0; //For Safari
  	document.documentElement.scrollTop = 0; //For Chrome
}