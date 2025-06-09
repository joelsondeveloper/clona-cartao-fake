function toggleMenu() {
    console.log("toggleMenu");
    const menu = document.querySelector(".header__nav__list");
    const menuIcon = document.querySelector(".menu-icon");
    menu.classList.toggle("nav-active");
    menuIcon.classList.toggle("nav-active");
}

function menuCheckListener(check) {
    console.log(check);
    check.addEventListener("change", toggleMenu);
}

function headerActiveTop(header) {
    
}

function menuActiveInit(check, header) {
    menuCheckListener(check);
    headerActiveTop(header);
}