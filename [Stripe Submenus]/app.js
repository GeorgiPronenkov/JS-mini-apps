import sublinks from "./data";

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sideBar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

//hide & show sidebar
toggleBtn.addEventListener('click', () => {
    sidebarWrapper.classList.add('show')
});

closeBtn.addEventListener('click', () => {
    sidebarWrapper.classList.remove('show')
});

//set sidebar
sideBar.innerHTML = sublinks.map((item) => {
    const {links,page} = item;
    return `<article>
                <h4>${page}</h4>
                <div class="sidebar-sublinks">
                    ${links.map((item) => {
                        //console.log(item)
                    }).join('')};
                </div>
            </article>`
}).join("");