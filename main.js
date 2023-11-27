//sticky nav
window.onscroll = function() {Stickynav()};

var sticky = navbar.offsetTop;  

function Stickynav() {

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function scrollToTarget(targetId) {

    var targetDiv = document.getElementById(targetId);
    var navbarHeight = navbar.offsetHeight;
    var targetScrollPosition = targetDiv.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });
}

//setting modal

var span = document.getElementsByClassName("close")[0];

settings.onclick = function() {
  settings_modal.style.display = "block";
}

span.onclick = function() {
    settings_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == settings_modal) {
    settings_modal.style.display = "none";
  }
}

// setting icon rotation
var isHovered;
settings_icon.onmouseenter = function() {rotate_icon(isHovered = true)}; 
settings_icon.onmouseleave = function() {rotate_icon(isHovered = false)}; 

function rotate_icon() {
  if (isHovered) {
    settings_icon.style.transform = `rotate(90deg)`;
  }
  else {
    settings_icon.style.transform = `rotate(0deg)`;
  }
}