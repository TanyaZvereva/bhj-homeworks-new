const input = document.getElementById("task__input");
const list = document.getElementById("tasks__list");
const button = document.getElementById("tasks__add");

function addTask() {
    if (input.value !== "") {
        list.innerHTML += `
    <div class="task">
    <div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>
`;
        input.value = "";
        const forRemove = document.getElementsByClassName("task__remove");
        Array.from(forRemove).forEach(element => {
            element.onclick = (event) => {
                element.closest(".task").remove();
            };
        });

    };
};
button.onclick = (event) => {
    event.preventDefault();
    addTask();
};
input.keypress = (event) => {

    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    };
};