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

//testing some things

var span = document.getElementsByClassName("close")[0];

settings.onclick = function() {
  settings_modal.style.display = "flex";
}

span.onclick = function() {
    settings_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == settings_modal) {
    settings_modal.style.display = "none";
  }
}