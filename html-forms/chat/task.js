const massive = ["phrase1", "phrase2", "phrase3"];
const chatButton = document.querySelector(".chat-widget__side-text");
const messages = document.querySelector('.chat-widget__messages');
const chatWidget = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input");
chatButton.onclick = () => {
  chatWidget.classList.add("chat-widget_active");
};

function getToday() {
  const data = new Date();
  const today = data.getHours() + ":" + data.getMinutes();
  return today;
}

function randomPhrase() {
  const index = Math.floor(Math.random() * (massive.length - 1));
  return massive[index];
};
input.addEventListener("keypress", event => {

  if (event.keyCode === 13) {
    console.log(event.target.value);
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${getToday()}</div>
    <div class="message__text">
      ${event.target.value}
    </div>
  </div>
  <div class="message">
    <div class="message__time">${getToday()}</div>
    <div class="message__text">
      ${randomPhrase()}
    </div>
  </div>
`;
  }
});