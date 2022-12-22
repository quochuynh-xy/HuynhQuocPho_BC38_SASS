window.onscroll = () => {
    headerChange();
}
let headerChange = () => {
    let header = document.querySelector('header.header');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        header.classList.add("scrolling")
    } else {
       header.classList.remove("scrolling");
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