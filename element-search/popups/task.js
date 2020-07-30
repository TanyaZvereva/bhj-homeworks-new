(function () {
    const mainEl = document.getElementById("modal_main")
    mainEl.classList.add("modal_active")
    const close = document.querySelector("#modal_main .modal__close")
    close.onclick = () => mainEl.classList.remove("modal_active")
    const show = document.querySelector(".show-success")
    const success = document.getElementById("modal_success")
    show.onclick = () => {
        success.classList.add("modal_active")
        mainEl.classList.remove("modal_active")
    }
    const closeSuccess = document.querySelector("#modal_success .modal__close")
    closeSuccess.onclick = () => success.classList.remove("modal_active")
}());