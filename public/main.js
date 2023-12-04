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
    mode_selector_options.style.display = "none";
    rotate_icon(settings_Clicked = false);
    lang_display_set();
    mode_display_set();
}

window.onclick = function(event) {
  if (event.target == settings_modal) {
    settings_modal.style.display = "none";
    lang_selector_options.style.display = "none";
    mode_selector_options.style.display = "none";
    rotate_icon(settings_Clicked = false);
  }
  if (!lang_selector_menu.contains(event.target) && lang_selector_menu != event.target) {
    lang_selector_options.style.display = "none";
    lang_display_set();
  }
  if (!mode_selector_menu.contains(event.target) && mode_selector_menu != event.target) {
    mode_selector_options.style.display = "none";
    mode_display_set();
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

// 1- language selector 

var lang = localStorage.getItem('lang') || '0';
lang = parseInt(lang, 10);

function lang_display_set(input){
  switch (input){
    case 0:
      lang_selector_display.innerHTML = (lang_selector_0_text.innerHTML);
      lang_selector_logo_display.src = lang_selector_logo_0.src;
      lang_selector_1.classList.remove("selected");
      lang_selector_0.classList.add("selected");
      localStorage.setItem('lang',  '0');
      lang = 0;
      break;
    case 1:
      lang_selector_display.innerHTML = (lang_selector_1_text.innerHTML);
      lang_selector_logo_display.src = lang_selector_logo_1.src;
      lang_selector_0.classList.remove("selected");
      lang_selector_1.classList.add("selected");
      localStorage.setItem('lang',  '1');
      lang = 1;
      break;
  }
}

function lang_selector(input){
  lang_display_set(input);
  switch (input){
    case 0:
      if (window.location.toString().includes("lang") && !window.location.toString().includes("English")){
        window.location.href = window.location.href.replace('French', 'English');
      }
      break;
    case 1:
      if (window.location.toString().includes("lang") && !window.location.toString().includes("French")){
        window.location.href = window.location.href.replace('English', 'French');
      }
      else if(!window.location.toString().includes("lang")){
        window.location.href ="./public/lang/French/"
      }
      break;
  }
  lang_selector_options.style.display = "none";
}

function open_lang_selector() {
  if(lang_selector_options.style.display == "none"){
    lang_selector_options.style.display = "flex";
  }
  else {
    lang_selector_options.style.display = "none";
    lang_display_set();
  }
}

function lang_highlight_del(){
  lang_selector_0.classList.remove("selected");
  lang_selector_1.classList.remove("selected");
}; 

function lang_highlight_set(){
  switch (lang){
    case 0:
      lang_selector_1.classList.remove("selected");
      lang_selector_0.classList.add("selected");
      break;
    case 1:
      lang_selector_0.classList.remove("selected");
      lang_selector_1.classList.add("selected");
      break;
  }
}

// 2- mode selector

var mode = localStorage.getItem('mode') || '0';
mode = parseInt(mode, 10);
function mode_display_set(input){
  switch (input){
    case 0:
      mode_selector_display.innerHTML = (mode_selector_0_text.innerHTML);
      mode_selector_logo_display.src = mode_selector_logo_0.src;
      mode_selector_1.classList.remove("selected");
      mode_selector_0.classList.add("selected");
      localStorage.setItem('mode',  '0');
      mode = 0;
      break;
    case 1:
      mode_selector_display.innerHTML = (mode_selector_1_text.innerHTML);
      mode_selector_logo_display.src = mode_selector_logo_1.src;
      mode_selector_0.classList.remove("selected");
      mode_selector_1.classList.add("selected");
      localStorage.setItem('mode', '1');
      mode = 1;
      break;
  }
  mode_selector_options.style.display = "none";
}

function open_mode_selector() {
  if(mode_selector_options.style.display == "none"){
    mode_selector_options.style.display = "flex";
  }
  else {
    mode_selector_options.style.display = "none";
    mode_display_set();
  }
}

function mode_highlight_del(){
  mode_selector_0.classList.remove("selected");
  mode_selector_1.classList.remove("selected");
}; 

function mode_highlight_set(){
  switch (mode){
    case 0:
      mode_selector_1.classList.remove("selected");
      mode_selector_0.classList.add("selected");
      break;
    case 1:
      mode_selector_0.classList.remove("selected");
      mode_selector_1.classList.add("selected");
      break;
  }
}

function mode_selector(input){ // will give a class to change the colors, will most likely have to use !important
  mode_display_set(input);
  switch (input){
    case 0:
      break;
    case 1:
      break;
  }
}