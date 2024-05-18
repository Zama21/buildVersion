(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();class f{constructor(i){this.routes=i,this.loadRoute(),this.init()}init(){window.addEventListener("popstate",()=>{this.loadRoute()}),document.body.addEventListener("click",i=>{const s=i.target.closest("[data-link]");if(i.target.matches("[data-link]")||s&&s.hasAttribute("data-link")){i.preventDefault();const n=s.getAttribute("href");this.navigateTo(n),document.querySelectorAll(".item").forEach(a=>{a.classList.remove("active")}),s.classList.add("active")}})}navigateTo(i){history.pushState(null,null,i),this.loadRoute(),window.dispatchEvent(new PopStateEvent("popstate"))}async loadRoute(){const i=this.routes.find(s=>s.path===location.pathname)||this.routes.find(s=>s.path==="*");document.querySelector("#app").innerHTML=await i.component.render()}}class l{constructor(i,s){this.path=i,this.component=s}}function O(){return`
                    <header class="mainHeader">
                        <nav class="wrapperMainPages">
                            <button class="returnBtn">
                                <img
                                    src="../../svg-icons/mainHeader/BackOutline.svg"
                                    alt="BackOutline.svg"
                                />
                                <p class="longName"><span>User pages</span> - Profile</p>
                                <p class="shortName">Profile</p>
                            </button>
                            <ul class="wrapperLinks">
                                <li class="item">
                                    <img
                                        src="../../svg-icons/mainHeader/ChartOutline.svg"
                                        alt="ChartOutline.svg"
                                    />
                                    <p>Statistics</p>
                                </li>
                                <li class="item">
                                    <img
                                        src="../../svg-icons/mainHeader/CalculateOutline.svg"
                                        alt="CalculateOutline.svg"
                                    />
                                    <p>Invoices</p>
                                </li>
                                <li class="item">
                                    <img
                                        src="../../svg-icons/mainHeader/ReceiptOutline.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                    <p>Schedule</p>
                                </li>
                            </ul>
                        </nav>
                    </header>
                `}function w(){return`
                <header class="secondaryHeader">
                    <nav class="wrapperProfilePages">
                        <ul class="wrapperLinks">
                            <li>
                                <a href="/activity" class="item" data-link>
                                    <img
                                        src="../../svg-icons/secondaryHeader/MenuOutline.svg"
                                        alt="Activity"
                                    />
                                    <p>Activity</p>
                                </a>
                            </li>
                            <li>
                                <a href="/map" data-link class="item">
                                    <img
                                        src="../../svg-icons/secondaryHeader/LocationOutline.svg"
                                        alt="Map"
                                    />
                                    <p>Map</p>
                                </a>
                            </li>
                            <li>
                                <a href="timer" class="item" data-link>
                                    <img
                                        src="../../svg-icons/secondaryHeader/TimeOutline.svg"
                                        alt="Time"
                                    />
                                    <p>Time</p>
                                </a>
                            </li>
                        </ul>
                        <div class="wrapperRightOptions">
                            <ul class="wrapperLinks">
                                <li>
                                    <a href="#" class="item" data-link>
                                        <img
                                            src="../../svg-icons/secondaryHeader/DocsOutline.svg"
                                            alt="Notes"
                                        />
                                        <p>Notes</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="item" data-link>
                                        <img
                                            src="../../svg-icons/secondaryHeader/PeopleOutline.svg"
                                            alt="Friends"
                                        />
                                        <p>Friends</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="item" data-link>
                                        <img
                                            src="../../svg-icons/secondaryHeader/JpgOutline.svg"
                                            alt="Photos"
                                        />
                                        <p>Photos</p>
                                    </a>
                                </li>
                            </ul>
                            <div class="wrapperSettings">
                                <img
                                    src="../../svg-icons/secondaryHeader/SettingsOutline.svg"
                                    alt="Settings"
                                /><img
                                    src="../../svg-icons/secondaryHeader/ArrowOutline.svg"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                    </nav>
                </header>
`}let v;function y(e,i){ymaps.ready(()=>{var s=new ymaps.Map("map",{center:[e,i],zoom:12}),n=new ymaps.Placemark([e,i],{hintContent:"Ваши координаты",balloonContent:"Это ваше местоположение"});s.geoObjects.add(n),document.getElementById("loader").style.display="none",document.getElementById("loader").style.height=0,document.getElementById("loader").style.width=0})}function m(){clearInterval(v),navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{const i=e.coords.latitude,s=e.coords.longitude;y(i,s)}):alert("Geolocation is not supported by this browser.")}document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("script");e.src="https://api-maps.yandex.ru/2.1/?apikey=9158bc72-59d0-4f5d-bb92-1210f630ca4b&lang=ru_RU",window.location.pathname==="/map"&&(e.onload=m),document.head.appendChild(e)});function C(){window.location.pathname==="/map"&&(v=setInterval(()=>{document.querySelector("#map")&&m()},100))}window.addEventListener("popstate",C);function S(){return{render(){return`
                 <div class="wrapperMainMap">
                    <div class="wrapperHeader">
                        <span class="mapText">Basic map</span>
                        <ul class="wrapperBtns">
                            <li class="item">
                                <img
                                    src="../../svg-icons/Timer/ChevronDownOutline.svg"
                                    alt="ChartOutline.svg"
                                />
                            </li>
                            <li class="item">
                                <img
                                    src="../../svg-icons/Timer/UpdateOutline.svg"
                                    alt="CalculateOutline.svg"
                                />
                            </li>
                            <li class="item">
                                <img
                                    src="../../svg-icons/Timer/CloseOutline.svg"
                                    alt="ReceiptOutline.svg"
                                />
                            </li>
                        </ul>
                    </div>
                    <div class="wrapperMap">
                        <div id="map"></div>
                        <div id="loader" class="loader">
                            <img
                                    src="../../svg-icons/Map/RedoOutline.svg"
                                    alt="ReceiptOutline.svg"
                                />
                        </div>
                    </div>
                </div>
                </div>
            `}}}const P="/assets/abstractPurple-CRzWDdzD.jpg";function M(){return`
            <main class="profileMain">
                <div class="heroSection">
                    <div class="wrapperMainSection">
                        <img src=${P} alt="mainImg" />
                    </div>
                    <div class="whoCommented">
                        <img
                            src="../../../../svg-icons/Profile/Main/CommentOutline.svg"
                            alt="ChartOutline.svg"
                        />
                        <p>
                            <span>Jason Anderson</span> commented:
                        </p>
                    </div>
                    <div class="comment">
                        <p class="text">
                            Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.
                        </p>
                        <p class="time">
                            – Jason, <i>10:30</i> am
                        </p>
                    </div>
                    <div class="meta">
                        <ul class="list">
                            <li class="item">
                                <img
                                    src="../../../../svg-icons/Profile/Main/CommentOutline.svg"
                                    alt="ChartOutline.svg"
                                />
                                <span>432</span>
                            </li>
                            <li>
                                <img
                                    src="../../../../svg-icons/Profile/Main/CommentOutline.svg"
                                    alt="ChartOutline.svg"
                                />
                                <span>47</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul class="comments">
                    <li class="comment">
                        <p>
                            Sunset Sunset Sunset
                        </p>
                        <div class="meta">
                            <img
                                src="../../../../svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>53 minutes ago</span>
                            <img
                                src="../../../../svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                    <li class="comment">
                        <p>
                            Sunset Sunset Sunset
                        </p>
                        <div class="meta">
                            <img
                                src="../../../../svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>53 minutes ago</span>
                            <img
                                src="../../../../svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                    <li class="comment">
                        <p>
                            Morning of Siberia
                        </p>
                        <div class="meta">
                            <img
                                src="../../../../svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>56 minutes ago</span>
                            <img
                                src="../../../../svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                    <li class="comment">
                        <p>
                            Sunset Sunset Sunset
                        </p>
                        <div class="meta">
                            <img
                                src="../../../../svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>53 minutes ago</span>
                            <img
                                src="../../../../svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                    <li class="comment">
                        <p>
                            Morning of Siberia
                        </p>
                        <div class="meta">
                            <img
                                src="../../../../svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>56 minutes ago</span>
                            <img
                                src="../../../../svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                </ul>
            </main>
            `}const T="/assets/Avatar-Bdg_jx1q.jpg";function b(){return`
            <aside class="wrapperAside">
                <div class="headerAside">
                    <div class="wrapper">
                        <div class="avatar">
                            <img src=${T} alt="avatar" />
                        </div>
                        <div class="about">
                            <p class="name">Hanna Dorman</p>
                            <p class="work">UX/UI designer</p>
                        </div>
                        <ul class="wrapperSocialLinks">
                                <li class="item">
                                    <a href="#">
                                        <img
                                            src="../../../../svg-icons/Profile/Aside/telegram_logo_icon.svg"
                                            alt="ChartOutline.svg"
                                        />
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#">
                                        <img
                                            src="../../../../svg-icons/Profile/Aside/hh.ru.svg"
                                            alt="CalculateOutline.svg"
                                        />
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#">
                                        <img
                                            src="../../../../svg-icons/Profile/Aside/Group.svg"
                                            alt="ReceiptOutline.svg"
                                        />
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
                <div class="navigation">
                    <div class="header">
                        <div class="title">Navigation</div>
                        <div class="btn">
                            <img
                                src="../../../../svg-icons/Profile/Aside/ChevronDownOutline.svg"
                                alt="ReceiptOutline.svg"
                            />
                        </div>
                    </div>
                    <div class="sectionNavigation sectionNavigation1">
                        <ul class="listNavigation">
                            <li class="itemNavigation">
                                <img
                                    src="../../../../svg-icons/Profile/Aside/Union.svg"
                                    alt="ReceiptOutline.svg"
                                />
                                <span>My profile</span>
                            </li>
                            <li class="itemNavigation flex balance">
                                <div class="wrapper">
                                    <img
                                        src="../../../../svg-icons/Profile/Aside/balance.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                    <span>Balance</span>
                                </div>
                                <span class="counter">$ 1,430</span>
                            </li>
                            <li class="itemNavigation flex connections">
                                <div class="wrapper">
                                    <img
                                        src="../../../../svg-icons/Profile/Aside/SchemeOutline.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                    <span>Connections</span>
                                </div>
                                <span class="counter">29</span>
                            </li>
                            <li class="itemNavigation">
                                <img
                                    src="../../../../svg-icons/Profile/Aside/PeopleOutline.svg"
                                    alt="ReceiptOutline.svg"
                                />
                                <span>Friends</span>
                            </li>
                        </ul>
                    </div>
                    <div class="sectionNavigation">
                        <ul class="listNavigation">
                            <li class="itemNavigation flex events">
                                <div class="wrapper">
                                    <img
                                        src="../../../../svg-icons/Profile/Aside/CalendarOutline.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                    <span>Events</span>
                                </div>
                                <span class="counter">45</span>
                            </li>
                            <li class="itemNavigation">
                                <img
                                    src="../../../../svg-icons/Profile/Aside/SettingsOutline.svg"
                                    alt="ReceiptOutline.svg"
                                />
                                <span>Account settings</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="forms">
                    <div class="header">
                        <div class="title">Share your thoughts</div>
                        <div class="btn">
                            <img
                                src="../../../../svg-icons/Profile/Aside/ChevronDownOutline.svg"
                                alt="ReceiptOutline.svg"
                            />
                        </div>
                    </div>
                    <form id="myForm">
                        <textarea id="myTextarea" placeholder="Enter your message..."></textarea>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </aside>
            `}function c(){return{async render(){return`
                <div class="wrapperMainProfile">
                    ${M()}
                    ${b()}
                </div>
            `}}}function H(){return{async render(){return`
                <div class="wrapperMain">
                    <div class="wrapperHeader">
                        <span class="timer">Timer</span>
                        <ul class="wrapperBtns">
                                <li class="item">
                                    <img
                                        src="../../svg-icons/Timer/ChevronDownOutline.svg"
                                        alt="ChartOutline.svg"
                                    />
                                </li>
                                <li class="item">
                                    <img
                                        src="../../svg-icons/Timer/UpdateOutline.svg"
                                        alt="CalculateOutline.svg"
                                    />
                                </li>
                                <li class="item">
                                    <img
                                        src="../../svg-icons/Timer/CloseOutline.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                </li>
                            </ul>
                    </div>
                    <div class="time">00:00:00</div>
                </div>
            `}}}let g,p,u=0,r=!1;function A(e){const i=Math.floor(e/3600),s=Math.floor(e%3600/60),n=e%60;return`${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function E(){g=setInterval(()=>{u++,r&&h()},1e3)}function L(){clearInterval(g)}function h(){const e=document.querySelector(".time");e.textContent=A(u),clearInterval(p)}function R(){window.location.pathname==="/timer"?(p=setInterval(()=>{document.querySelector(".time")&&h()},100),r=!0):r=!1}window.addEventListener("popstate",R);window.addEventListener("DOMContentLoaded",()=>{window.location.pathname==="/timer"&&(r=!0),E()});window.addEventListener("beforeunload",()=>{L()});async function d(e){const i=document.getElementById("header");i.innerHTML+=e}d(O()).then(()=>d(w()));const k=[new l("/activity",new c),new l("/map",new S),new l("/timer",new H),new l("*",new c)];new f(k);
