function getHole(index) {
    return document.getElementById(`hole${index}`)
}
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

function countClick(hole) {
    const has = hole.className.includes('hole_has-mole')
    const deadCount = +dead.textContent
    const lostCount = +lost.textContent
    if (has) {
        dead.textContent = deadCount + 1
    } else {
        lost.textContent = lostCount + 1
    }
    if (lostCount === 5) {
        alert("Вы проиграли!")
    }
    if (deadCount === 10) {
        alert("Вы выйграли!")
    }
}
let hole = null
for (let i = 1; i <= 9; i++) {
    hole = getHole(i)
    console.log(hole)
    hole.onclick = () => countClick(hole)
}