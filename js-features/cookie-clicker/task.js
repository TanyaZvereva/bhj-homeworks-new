const result = document.getElementById("clicker__counter")
const img = document.getElementById("cookie")
let count = 0
const width = img.offsetWidth
const height = img.offsetHeight
let fl = true

function clicker() {
    count++
    result.innerText = count
    if (fl) {
        img.style.height = height + 5 + "px"
        img.style.width = width + "px"

    } else {
        img.style.width = width + 5 + "px"
        img.style.height = height + "px"

    }
    fl = !fl

}
img.onclick = clicker