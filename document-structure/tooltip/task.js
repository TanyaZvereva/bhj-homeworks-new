const toolTipe = document.querySelector(".tooltip");
const links = document.getElementsByClassName("has-tooltip");
Array.from(links).forEach(link => {
    link.onclick = () => {
        const position = link.getBoundingClientRect();
        const text = link.getAttribute("title");
        if (toolTipe.style.display === "block") {
            toolTipe.style.display = "none"
        } else {
            toolTipe.style.display = "block"
        };
        toolTipe.style.top = position.bottom + "px";
        toolTipe.style.left = position.left + "px";
        toolTipe.innerText = text;
        return false;
    };
});
window.onscroll = () => {
    toolTipe.style.display = "none";
};