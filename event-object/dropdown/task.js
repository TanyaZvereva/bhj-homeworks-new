const dropDown = document.querySelector(".dropdown")
const dropDownList = document.querySelector(".dropdown__list")
const dropDownValue = document.querySelector(".dropdown__value")
dropDown.onclick = (event) => {
    dropDownValue.textContent = event.target.textContent
    dropDownList.classList.toggle("dropdown__list_active")
    return false
}