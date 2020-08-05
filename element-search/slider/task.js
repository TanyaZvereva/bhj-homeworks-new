const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const sliderItems = document.querySelector(".slider__items");
let sliderNumber = 0;
let sliderLength = sliderItems.children.length;

next.onclick = () => {
    sliderItems.children[sliderNumber].classList.remove("slider__item_active");
    (sliderNumber === sliderLength - 1) ? sliderNumber = 0: sliderNumber++;
    sliderItems.children[sliderNumber].classList.add("slider__item_active");
};
prev.onclick = () => {
    sliderItems.children[sliderNumber].classList.remove("slider__item_active");
    (sliderNumber === 0) ? sliderNumber = sliderLength - 1: sliderNumber--;
    sliderItems.children[sliderNumber].classList.add("slider__item_active");
};