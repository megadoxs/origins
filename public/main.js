//sticky nav
window.onscroll = function() {Stickynav()};

const sticky = navbar.offsetTop; 

function Stickynav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.classList.remove("sticky");
  }
}

function onLoadScrollToTarget(){
  if (localStorage.getItem('scroll') !== null) {
    let target = localStorage.getItem('scroll'); 
    scrollToTarget(target);
    localStorage.removeItem('scroll')
  }
}

function augmentedScrollToTarget(targetId) {
  localStorage.setItem('scroll', targetId)
}

async function scrollToTarget(targetId) {
  let targetDiv = document.getElementById(targetId);
  let navbarHeight = navbar.offsetHeight;
  let targetScrollPosition = targetDiv.offsetTop - navbarHeight;

    window.scrollTo({
    top: targetScrollPosition,
    behavior: 'smooth'
  });
}

async function navButtonsManager(target){
  let targets = target.split(", ");
  if (targets[1]){
    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')){
      let targetDiv = document.getElementById(targets[1]);
      let navbarHeight = navbar.offsetHeight;
      let targetScrollPosition = targetDiv.offsetTop - navbarHeight;
    
        window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth'
      });
    }
    else{
      localStorage.setItem('scroll', targets[1]);
      window.location.href = `./${targets[0]}`;
    }
  }
  else {
    if (!window.location.toString().includes("lang")){
      window.location.href = `./public/lang/English/${targets[0]}`;
    }
    else {
      window.location.href = `./${targets[0]}`;
    }
  }
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

function nerd_set(page){
  if (nerd === "true") {
    nerd = "false";
    localStorage.setItem('nerd',  'false');
  }
  else {
    nerd = "true";
    localStorage.setItem('nerd',  'true');
  }
  if (typeof page != 'undefined') nerd_show_all(page);
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

const transition_speed = 200;

const codeDivArray = [
  [blood_born, blood_sucker, vampiric_attributes, immortal, wind_cloack], 
  ["some_other_power_id"],
  ["some_other_power_id"]
];

async function onLoad_nerd_show(page){
  await fetch_json_files();
  for (let i = 0; i < codeDivArray[page].length; i++ ){  
    codeDivShow = document.getElementById(codeDivArray[page][i].id + "_show");
    codeDivHide = document.getElementById(codeDivArray[page][i].id + "_hide");
    codeDiv = document.getElementById(codeDivArray[page][i].id + "_code");
    codeDiv.style.transition = "none"

    if(nerd === "true"){
      codeDiv.style.height = codeDiv.scrollHeight + "px";
      codeDiv.style.marginBottom = "20px";
      codeDivShow.style.display = "none";
      codeDivHide.style.display = "block";
    } 
    else {
      codeDiv.style.height = "0px"
      codeDiv.style.marginBottom = "0px";
      codeDivShow.style.display = "block";
      codeDivHide.style.display = "none";
    }
  }
  onLoadScrollToTarget();
}

function nerd_show_all(page){
  for (let i = 0; i < codeDivArray[page].length; i++ ){  
    codeDivShow = document.getElementById(codeDivArray[page][i].id + "_show");
    codeDivHide = document.getElementById(codeDivArray[page][i].id + "_hide");
    codeDiv = document.getElementById(codeDivArray[page][i].id + "_code");
    codeDiv.style.transition = "height " + codeDiv.scrollHeight/transition_speed + "s linear"

    if(nerd === "true"){
      codeDiv.style.height = codeDiv.scrollHeight + "px";
      codeDiv.style.marginBottom = "20px";
      codeDivShow.style.display = "none";
      codeDivHide.style.display = "block";
    } 
    else if (codeDiv.style.height > "0px"){
      codeDiv.style.height = "0px"
      codeDiv.style.marginBottom = "0px";
      codeDivShow.style.marginTop = "20px";
      codeDivShow.style.display = "block";
      codeDivHide.style.display = "none";
      codeDiv.addEventListener("transitionend", function (currentCodeDivShow) {
        return function () {
          currentCodeDivShow.style.marginTop = "";
        };
      }(codeDivShow));
    }
  }
}

function nerd_show(page, code_box, of) { // code_box = number starting at 0 of the box in that page, of = on(show) or off(hide), 0 = show, 1 = hide
  codeDivShow = document.getElementById(codeDivArray[page][code_box].id + "_show");
  codeDivHide = document.getElementById(codeDivArray[page][code_box].id + "_hide");
  codeDiv = document.getElementById(codeDivArray[page][code_box].id + "_code");
  codeDiv.style.transition = "height " + codeDiv.scrollHeight/transition_speed + "s linear"
  
  if (of == 1){
    codeDiv.style.height = codeDiv.scrollHeight + "px";
    codeDiv.style.marginBottom = "20px";
    codeDivShow.style.display = "none";
    codeDivHide.style.display = "block";
  }
  else {
    codeDiv.style.height = "0px"
    codeDiv.style.marginBottom = "0px";
    codeDivShow.style.marginTop = "20px";
    codeDivShow.style.display = "block";
    codeDivHide.style.display = "none";
    codeDiv.addEventListener("transitionend", function (currentCodeDivShow) {
      return function () {
        currentCodeDivShow.style.marginTop = "";
      };
    }(codeDivShow));
  }
}

//code fetch

const pages = ["vampire"]; // "werewolf", "rimuru" aren't implemented yet, maybe add this array to the power array

async function fetch_json_files(){
  for(let i = 0; i < pages.length; i++ ){
    for(let j = 0; j < codeDivArray[i].length; j++ ){
      var power_json = document.getElementById(codeDivArray[i][j].id + "_json");
      await fetch('../../downloads/' + pages[i] + "/" + codeDivArray[i][j].id + ".json")
      .then( async response => await response.json())
      .then(data => {
        power_json.textContent = JSON.stringify(data, null, 3);
      })
    }
  }
}

fetch_json_files()