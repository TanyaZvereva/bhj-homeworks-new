const rotatorParent = document.querySelector(".rotator");
let number = 0;
const length = rotatorParent.children.length;
console.log(length);
let timerId = setTimeout(function tick() {
    if (number === length - 1) {
        number = 0;
    }
    rotatorParent.children[number].classList.remove("rotator__case_active");
    number++;
    console.log(number)
    rotatorParent.children[number].classList.add("rotator__case_active");
    timerId = setTimeout(tick, 1000);
}, 1000);