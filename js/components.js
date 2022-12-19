window.onscroll = () => {
    headerChange();
}
let headerChange = () => {
    let header = document.querySelector('header.header');
    let headerLogo = document.querySelector('.header .container .site-logo img');
    let headerContainer = document.querySelector('header .container.d-flex');
    let headerContactBtn = document.querySelector('.header .container .nav-bar .nav-contact .contact-btn');
    let menuDot = document.querySelector('.header .container .nav-bar .nav-menu ul .nav-col .menu-item::after');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        header.style.backgroundColor = "#fff"
        headerLogo.style.display = "none";
        headerContainer.style.padding = "6px 0";
        headerContactBtn.style.height = "2.5rem";
        headerContactBtn.style.lineHeight = "2.5rem";
        // menuDot.style.transform = "translateY(-50%)";
    } else {
        header.style.backgroundColor = "unset"
        headerLogo.style.display = "unset";
        headerContainer.style.padding = "unset";
        headerContactBtn.style.height = "3.5rem";
        headerContactBtn.style.lineHeight = "3.5rem";
        // menuDot.style.bottom = "initial";
    }
}
function resizeMenu() {
    let btn = document.querySelector('#btn-handleSidebar');
    document.querySelector('.offcanvas').classList.toggle("show");
    let sideNav = document.querySelector('.offcanvas.offcanvas-start').classList.value.includes("show");
    document.querySelector('body').classList.toggle("showSidebar");
    if(sideNav) {
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    } else {
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}
function closeSidebar () {
}
function resizeMenuClose () {
    // document.querySelector('selector');
}
document.querySelector('#btn-handleSidebar').onclick = resizeMenu;