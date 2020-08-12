const fontSize = document.getElementsByClassName("font-size");
const book = document.getElementById("book");
console.log(fontSize)
Array.from(fontSize).forEach(element => {
    element.onclick = () => {
        const classRemove = document.querySelector(".font-size_active");
        classRemove.classList.remove("font-size_active");
        element.classList.add("font-size_active");
        const size = element.dataset.size;
        if (size === "small") {
            book.setAttribute("class", "book");
            book.classList.add("book_fs-small");
        } else if (size === "big") {
            book.setAttribute("class", "book");
            book.classList.add("book_fs-big");
        } else {
            book.setAttribute("class", "book");
        }
        return false;
    }
});