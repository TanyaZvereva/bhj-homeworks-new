const reveal = document.getElementsByClassName("reveal");
window.addEventListener("scroll", (event) => {
    const scroll = this.scrollY;
    scroll > reveal[0].offsetTop && reveal[0].classList.add("reveal_active");
    scroll > reveal[1].offsetTop && reveal[1].classList.add("reveal_active");
});