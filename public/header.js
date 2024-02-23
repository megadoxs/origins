class sharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1 id = "h1">Megadoxs's Origins</h1>
            <nav id = "navbar" class = "navbar">
                <div>
                    <ul>
                        <li class = "drop_down_menu">
                        <div id = "home_buttons">
                            <button class = "navbar" id = "home_main" onclick="location.href = './index.html'">Home</button>
                            <button class = "navbar" id = "home_arrow"><p>&#11167;</p></button>
                        </div>
                        <div id = "home_menu">
                            <button class = "navbar navbar_button" onclick="navButtonsManager('index.html, origins')">Origins Mod</button>
                            <button class = "navbar navbar_button" onclick="navButtonsManager('index.html, minecraft_datapacks')">Minecraft Datapacks</button>
                            <button class = "navbar navbar_button" onclick="navButtonsManager('index.html, origins_datapacks')">Origins Datapacks</button>
                            <button class = "navbar navbar_button" onclick="navButtonsManager('index.html, origins_overview')">My Origins Datapacks</button>
                        </div>
                        </li>
                        <li class = "drop_down_menu">
                        <div id = "origins_buttons">
                            <button class = "navbar" id = "origins_main" onclick="navButtonsManager('origins.html')">Origins</button>
                            <button class = "navbar" id = "origins_arrow"><p>&#11167;</p></button>
                        </div>
                        <div id = "origins_menu">
                            <button class = "navbar navbar_button" onclick="navButtonsManager('rimuru.html')">Rimuru</button>
                            <button class = "navbar navbar_button" onclick="navButtonsManager('werewolf.html')">Werewolf</button>
                            <button class = "navbar navbar_button" onclick="navButtonsManager('vampire.html')">Vampire</button>
                        </div>
                        </li>
                        <li><button class = "navbar navbar_button" onclick="navButtonsManager('post.html')">Post</button></li>
                        <li><button class = "navbar navbar_button" onclick="location.href = '#contacts'">Contacts</button></li>
                    </ul>
                </div>
                <div>
                    <button class = "navbar" id = "settings"><img id = "settings_icon" src = "../../images/setting.png"></button>
                    <div id="settings_modal">
                        <div id="modal_content" class = "color4">
                        <span class="close">&times;</span>
                        <h2>Settings</h2>
                        <div id="lang_select" class = "custom_select">
                            <p>Select your language:</p>
                            <div id = "lang_selector_menu">
                            <button onclick="open_lang_selector()">
                                <div>
                                <img id = "lang_selector_logo_display" src = "../../images/USA.png">
                                <p id ="lang_selector_display">English</p>
                                </div>
                                <div>
                                <p>&#11167; &nbsp;&nbsp;</p>
                                </div>
                            </button>
                            <div id = "lang_selector_options" onmouseleave="lang_highlight_set()" onmouseenter="lang_highlight_del()">
                                <button id = "lang_selector_0" onclick="lang_selector(0)"><img id = "lang_selector_logo_0" src = "../../images/USA.png"><p id = "lang_selector_0_text">English</p></button>
                                <button id = "lang_selector_1" onclick="lang_selector(1)"><img id = "lang_selector_logo_1" src = "../../images/Canada.png"><p id = "lang_selector_1_text">French</p></button>
                            </div>
                            </div>
                        </div>
                        <div id="mode_select" class = "custom_select">
                            <p>Select your mode:</p>
                            <div id = "mode_selector_menu">
                            <button onclick="open_mode_selector()">
                                <div>
                                <img id = "mode_selector_logo_display" src = "../../images/USA.png">
                                <p id ="mode_selector_display">Night Mode</p>
                                </div>
                                <div>
                                <p>&#11167; &nbsp;&nbsp;</p>
                                </div>
                            </button>
                            <div id = "mode_selector_options" onmouseleave="mode_highlight_set()">
                                <button id = "mode_selector_0" onclick="mode_selector(0)" onmouseenter="mode_highlight_del()"><img id = "mode_selector_logo_0" src = "../../images/moon.png"><p id = "mode_selector_0_text">Night Mode</p></button>
                                <button id = "mode_selector_1" onclick="mode_selector(1)" onmouseenter="mode_highlight_del()"><img id = "mode_selector_logo_1" src = "../../images/sun.png"><p id = "mode_selector_1_text">Day Mode</p></button>
                            </div>
                            </div>
                        </div>
                        <div class = custom_select>
                            <p>Enable nerd mode</p>
                            <input type="checkbox" id = "nerd_mode" class = "margl5" onClick="nerd_set(page)">
                        </div>
                            <div class = custom_select>
                            <p>Code display instant</p>
                            <input type="checkbox" id = "code_instant" class = "margl5" onClick="codeInstant()">
                        </div>
                        <div class = custom_select>
                            <p>Code display speed:</p>
                            <input type="number" id = "code_speed" onChange="codeSpeed(this.value, this.min, this.max);" class = "margl5 numb_input" min= "100" max = "500">
                            <p>pixel/s</p>
                        <div>
                        </div>
                    </div>
                </div>
            </nav>
        `
    }
}

customElements.define('shared-header', sharedHeader);