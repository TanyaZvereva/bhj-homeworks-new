function menuActive(event) {
    const parent = event.target.closest(".menu__item");
    const subMenu = parent.querySelector(".menu_sub");
    if (subMenu) {
        subMenu.classList.toggle("menu_active");
        return false;
    };
}
(function () {
    const allMenu = document.querySelectorAll(".menu__link");
    allMenu.forEach(menu => {
        menu.onclick = (event) => menuActive(event);
    });
}());