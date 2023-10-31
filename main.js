window.onscroll = function() {Stickynav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;  

function Stickynav() {

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}