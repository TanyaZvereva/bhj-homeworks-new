const el = document.getElementById('timer')
let timer
let x = el.innerText
countdown()

function countdown() {
    x--
    el.innerText = x
    if (x === 0) {
        clearTimeout(timer)
        alert("Вы победили в конкурсе!")
    } else {
        timer = setTimeout(countdown, 1000)
    }
}