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
  settings_modal.style.display = "flex";
}

span.onclick = function() {
    settings_modal.style.display = "none";
    rotate_icon(settings_Clicked = false);
}

window.onclick = function(event) {
  if (event.target == settings_modal) {
    settings_modal.style.display = "none";
    rotate_icon(settings_Clicked = false);
  }
}

// setting icon rotation
var settings_Hovered;
var settings_Clicked;
settings_icon.onmouseenter = function() {rotate_icon(settings_Hovered = true)}; 
settings_icon.onclick = function() {rotate_icon(settings_Clicked = true)}; 
settings_icon.onmouseleave = function() {rotate_icon(settings_Hovered = false)}; 

function rotate_icon() {
  if (settings_Hovered || settings_Clicked) {
    settings_icon.style.transform = `rotate(90deg)`;
  }
  else {
    settings_icon.style.transform = `rotate(0deg)`;
  }
}

// adding images to language select menu 
