const checkboxes = document.getElementsByClassName("interest__check");
Array.from(checkboxes).forEach(box => {
    box.onchange = () => {
        console.log(box.parentElement.nextElementSibling);
        const boxChildren = box.parentElement.nextElementSibling.getElementsByClassName("interest__check");
        console.log(boxChildren)
        if (box.checked === true) {
            Array.from(boxChildren).forEach(boxChild => {
                boxChild.checked = true;
            });
        } else {
            Array.from(boxChildren).forEach(boxChild => {
                boxChild.checked = false;
            });
        }
    }
})