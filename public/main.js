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

var close = document.getElementsByClassName("close")[0];

settings.onclick = function() {
  settings_modal.style.display = "flex";
}

close.onclick = function() {
    settings_modal.style.display = "none";
    custom_select_options.style.display = "none";
    rotate_icon(settings_Clicked = false);
    custom_select();
}

window.onclick = function(event) {
  if (event.target == settings_modal) {
    settings_modal.style.display = "none";
    custom_select_options.style.display = "none";
    rotate_icon(settings_Clicked = false);
    
  }

  else if (event.target != custom_select_menu && event.target != custom_select_display && event.target != custom_select_logo_display) {
    custom_select_options.style.display = "none";
    custom_select();
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

// custom select menu

var selected;
function custom_select(){
  switch (selected){
    case 0:
      custom_select_display.innerHTML = (custom_select_0_text.innerHTML + " &nbsp;&#11167; &nbsp;");
      custom_select_logo_display.src = custom_select_logo_0.src;
      custom_select_1.classList.remove("selected");
      custom_select_0.classList.add("selected");
      if (window.location.pathname != 'public/lang/English/index.html' && window.location.pathname != '/index.html' && window.location.pathname != 'public/lang/English/' && window.location.pathname != '/'){
        window.location.href = "public/lang/English/";
      }
      break;
    case 1:
      custom_select_display.innerHTML = (custom_select_1_text.innerHTML + " &nbsp;&#11167; &nbsp;");
      custom_select_logo_display.src = custom_select_logo_1.src;
      custom_select_0.classList.remove("selected");
      custom_select_1.classList.add("selected");
      if (window.location.pathname != 'public/lang/French/index.html' && window.location.pathname != 'public/lang/French/'){
        window.location.href = "public/lang/French/";
      }
      break;
  }
}

custom_select_options.onmouseenter = function(){
  custom_select_0.classList.remove("selected");
  custom_select_1.classList.remove("selected");
}; 

custom_select_options.onmouseleave = function(){
  custom_select();
}; 

function open_select() {
  if(custom_select_options.style.display == "none"){
    custom_select_options.style.display = "flex";
  }
  else {
    custom_select_options.style.display = "none";
    custom_select();
  }
}