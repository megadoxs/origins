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
    lang_selector_options.style.display = "none";
    rotate_icon(settings_Clicked = false);
    lang_selector(lang);
}

window.onclick = function(event) {
  if (event.target == settings_modal) {
    settings_modal.style.display = "none";
    lang_selector_options.style.display = "none";
    rotate_icon(settings_Clicked = false);
  }
  else if (event.target != lang_selector_menu && event.target != lang_selector_display && event.target != lang_selector_logo_display) {
    lang_selector_options.style.display = "none";
    lang_selector(lang);
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

var lang;
function lang_selector(lang){
  switch (lang){
    case 0:
      lang_selector_display.innerHTML = (lang_selector_0_text.innerHTML + " &nbsp;&#11167; &nbsp;");
      lang_selector_logo_display.src = lang_selector_logo_0.src;
      lang_selector_1.classList.remove("selected");
      lang_selector_0.classList.add("selected");
      if (!window.location.toString().includes("English")){
        window.location.href = window.location.href.replace('French', 'English');
      }
      break;
    case 1:
      lang_selector_display.innerHTML = (lang_selector_1_text.innerHTML + " &nbsp;&#11167; &nbsp;");
      lang_selector_logo_display.src = lang_selector_logo_1.src;
      lang_selector_0.classList.remove("selected");
      lang_selector_1.classList.add("selected");
      if (!window.location.toString().includes("French")){
        window.location.href = window.location.href.replace('English', 'French');
      }
      break;
  }
}

function open_lang_selector() {
  if(lang_selector_options.style.display == "none"){
    lang_selector_options.style.display = "flex";
  }
  else {
    lang_selector_options.style.display = "none";
    lang_selector(lang);
  }
}


lang_selector_options.onmouseenter = function(){
  lang_selector_0.classList.remove("selected");
  lang_selector_1.classList.remove("selected");
}; 

lang_selector_options.onmouseleave = function(){
  lang_selector(lang);
}; 
