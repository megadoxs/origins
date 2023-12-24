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

function augmentedScrollToTarget(targetId) {
  localStorage.setItem('scroll', targetId)
}

function onLoadScrollToTarget(){
  if (localStorage.getItem('scroll') !== null) {
    var target = localStorage.getItem('scroll'); 
    scrollToTarget(target);
    localStorage.removeItem('scroll')
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

// drop downs

// home drop down
var home_Hovered;
var home_Clicked;
home_buttons.onmouseenter = function() {home_hover()};
home_buttons.onmouseleave = function() {home_hover()};
home_arrow.onmouseenter = function() {display_home(home_Hovered = true)}; 
home_arrow.onclick = function() {home_clicked()}; 
home_arrow.onmouseleave = function() {display_home(home_Hovered = false)}; 
home_menu.onmouseenter = function() {home_hover(), display_home(home_Hovered = true)}; 
home_menu.onmouseleave = function() {home_hover(), display_home(home_Hovered = false)}; 

function home_hover(){
  if(!home_Clicked){
    if(mode == 0) {
    home_main.classList.toggle("nav_button_night_hover");
    home_arrow.classList.toggle("nav_button_night_hover");
    }
    else {
      home_main.classList.toggle("nav_button_day_hover");
      home_arrow.classList.toggle("nav_button_day_hover");
    }
  }
}

function home_clicked(){
  if(home_Clicked){
    home_Clicked = false
  }
  else{
    home_Clicked = true
  }
}

function display_home() {
  if (home_Hovered || home_Clicked) {
    home_menu.style.display = "flex";
    home_menu.style.flexDirection = "column";
  }
  else {
    home_menu.style.display = "none";
  }
}

// origins drop down
var origins_Hovered;
var origins_Clicked;
origins_buttons.onmouseenter = function() {origins_hover()};
origins_buttons.onmouseleave = function() {origins_hover()};
origins_arrow.onmouseenter = function() {display_origins(origins_Hovered = true)}; 
origins_arrow.onclick = function() {origins_clicked()}; 
origins_arrow.onmouseleave = function() {display_origins(origins_Hovered = false)}; 
origins_menu.onmouseenter = function() {origins_hover(), display_origins(origins_Hovered = true)}; 
origins_menu.onmouseleave = function() {origins_hover(), display_origins(origins_Hovered = false)}; 

function origins_hover(){
  if(!origins_Clicked){
    if(mode == 0) {
      origins_main.classList.toggle("nav_button_night_hover");
      origins_arrow.classList.toggle("nav_button_night_hover");
      }
      else {
        origins_main.classList.toggle("nav_button_day_hover");
        origins_arrow.classList.toggle("nav_button_day_hover");
      }
  }
}

function origins_clicked(){
  if(origins_Clicked){
    origins_Clicked = false
  }
  else{
    origins_Clicked = true
  }
}

function display_origins() {
  if (origins_Hovered || origins_Clicked) {
    origins_menu.style.display = "flex";
    origins_menu.style.flexDirection = "column";
  }
  else {
    origins_menu.style.display = "none";
  }
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

//nerd checkbox (show by default the code of every page)

var nerd = localStorage.getItem('nerd') || "false";

function onLoad_nerd_set(){
  nerd_mode.checked = nerd;
  if (nerd === "true") {
    nerd_mode.checked = true;
  }
  else {
    nerd_mode.checked = false;
  }
}

function nerd_set(){
  if (nerd === "true") {
    nerd = "false";
    localStorage.setItem('nerd',  'false');
    nerd_code()
  }
  else {
    nerd = "true";
    localStorage.setItem('nerd',  'true');
    nerd_code()
  }
}

// window click detection

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
  if (event.target != home_arrow && !home_arrow.contains(event.target) && event.target != home_menu && !home_menu.contains(event.target)){
    if(home_Clicked){
      if (mode == 0) {
        home_main.classList.toggle("nav_button_night_hover");
        home_arrow.classList.toggle("nav_button_night_hover");
      }
      else {
        home_main.classList.toggle("nav_button_day_hover");
        home_arrow.classList.toggle("nav_button_day_hover");
      }
    }
    home_Clicked = false;
    home_menu.style.display = "none";
  }
    if (event.target != origins_arrow && !origins_arrow.contains(event.target) && event.target != origins_menu && !origins_menu.contains(event.target)){
    if (origins_Clicked){
      if (mode == 0) {
        origins_main.classList.toggle("nav_button_night_hover");
        origins_arrow.classList.toggle("nav_button_night_hover");
      }
      else {
        origins_main.classList.toggle("nav_button_day_hover");
        origins_arrow.classList.toggle("nav_button_day_hover");
      }
    }
    origins_Clicked = false;
    origins_menu.style.display = "none";
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

function mode_selector(input){
  mode_display_set(input);
  switch (input){
    case 0:
      var color_code_boxs = document.getElementsByClassName("code_box");
      for (var i = 0; i < color_code_boxs.length; i++) {
        color_code_boxs[i].classList.remove("color1_daymode");
      }
      var color_large_code_boxs = document.getElementsByClassName("large_code_box");
      for (var i = 0; i < color_large_code_boxs.length; i++) {
        color_large_code_boxs[i].classList.remove("color1_daymode");
      }
      h1.classList.remove("color2_daymode");
      indexs = document.getElementsByClassName("index")
      indexs[0].classList.remove("color2_daymode");
      var color_navbar = document.getElementsByClassName("navbar");
      var test = document.getElementsByClassName("navbar_button");
      for (var i = 0; i < color_navbar.length; i++) {
        color_navbar[i].classList.remove("color5_daymode");
      }
      var daymode_color3 = document.getElementsByClassName("color3");
      for (var i = 0; i < daymode_color3.length; i++) {
        daymode_color3[i].classList.remove("color3_daymode");
      }
      var daymode_color4 = document.getElementsByClassName("color4");
      for (var i = 0; i < daymode_color4.length; i++) {
        daymode_color4[i].classList.remove("color4_daymode");
      }
      var color_nav_button = document.getElementsByClassName("navbar_button");
      for (var i = 0; i < color_nav_button.length; i++) {
        color_nav_button[i].classList.add("navbar_button_night");
        color_nav_button[i].classList.remove("navbar_button_day");
      }
      break;
    case 1:
      var code_boxs = document.getElementsByClassName("code_box");
      for (var i = 0; i < code_boxs.length; i++) {
      code_boxs[i].classList.add("color1_daymode");
      }
      var color_large_code_boxs = document.getElementsByClassName("large_code_box");
      for (var i = 0; i < color_large_code_boxs.length; i++) {
        color_large_code_boxs[i].classList.add("color1_daymode");
      }
      h1.classList.add("color2_daymode");
      indexs = document.getElementsByClassName("index")
      indexs[0].classList.add("color2_daymode");
      var test = document.getElementsByClassName("navbar_button");
      var color_navbar = document.getElementsByClassName("navbar");
      for (var i = 0; i < color_navbar.length; i++) {
        color_navbar[i].classList.add("color5_daymode");
      }
      var daymode_color3 = document.getElementsByClassName("color3");
      for (var i = 0; i < daymode_color3.length; i++) {
        daymode_color3[i].classList.add("color3_daymode");
      }
      var daymode_color4 = document.getElementsByClassName("color4");
      for (var i = 0; i < daymode_color4.length; i++) {
        daymode_color4[i].classList.add("color4_daymode");
      }
      var color_nav_button = document.getElementsByClassName("navbar_button");
      for (var i = 0; i < color_nav_button.length; i++) {
        color_nav_button[i].classList.add("navbar_button_day");
        color_nav_button[i].classList.remove("navbar_button_night");
      }
      break;
  }
}

// show code

function nerd_code(){
  if(nerd === "true"){
    blood_bar_code.style.display = "block";
    blood_bar_show.style.display = "none"
    blood_bar_hide.style.display = "block";
  } 
  else {
    blood_bar_code.style.display = "none";
    blood_bar_show.style.display = "block"
    blood_bar_hide.style.display = "none";
  }
}

function show_code(code_box) {
  switch (code_box){
    case 0:
      blood_bar_code.style.display = "block";
      blood_bar_show.style.display = "none"
      blood_bar_hide.style.display = "block";
  }
}

function hide_code(code_box) {
  switch (code_box){
    case 0:
      blood_bar_code.style.display = "none";
      blood_bar_show.style.display = "block"
      blood_bar_hide.style.display = "none";
  }
}
