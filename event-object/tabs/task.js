const tabs = document.querySelectorAll(".tab")
const tabContens = document.querySelector(".tab__contents")

tabs.forEach((element) => {
    element.onclick = (event) => {
        document.querySelector(".tab_active").classList.remove("tab_active")
        event.target.classList.add("tab_active")
        const tabsArray = Array.prototype.slice.call(tabs)
        const className = document.getElementsByClassName("tab_active")[0]
        const index = tabsArray.indexOf(className)
        console.log(tabsArray)
        document.querySelector(".tab__content_active").classList.remove("tab__content_active")
        tabContens.children[index].classList.add("tab__content_active")
    }
});