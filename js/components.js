window.onscroll = () => {
  headerChange();
};
let headerChange = () => {
  let header = document.querySelector("header.header");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("scrolling");
    header.classList.remove("stay");
  } else {
    header.classList.remove("scrolling");
    //    header.classList.add("stay");
  }
};
function resizeMenu() {
  let btn = document.querySelector("#btn-handleSidebar");
  document.querySelector(".offcanvas").classList.toggle("show");
  let sideNav = document
    .querySelector(".offcanvas.offcanvas-start")
    .classList.value.includes("show");
  document.querySelector("body").classList.toggle("showSidebar");
  if (sideNav) {
    btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}
function closeSidebar() {}
function resizeMenuClose() {
  // document.querySelector('selector');
}
document.querySelector("#btn-handleSidebar").onclick = resizeMenu;
let arrows = document.querySelectorAll(
  ".header .nav-bar-vertical .nav-item .menu-arrow"
);
arrows.forEach((data) => {
  data.onclick = function () {
    let listClasses = this.classList.value;
    if(listClasses.includes("fa-chevron-down")) {
        this.classList.add("fa-chevron-up");
        this.classList.remove("fa-chevron-down");
    } else {
        this.classList.remove("fa-chevron-up");
        this.classList.add("fa-chevron-down");
    }
  };
});
