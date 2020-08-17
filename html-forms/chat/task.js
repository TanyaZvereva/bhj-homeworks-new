const chatButton = document.querySelector(".chat-widget__side-text");
const messages = document.querySelector('.chat-widget__messages');
const chatWidget = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input");
chatButton.onclick = () => {
    chatWidget.classList.add("chat-widget_active");
};
input.addEventListener("keypress", event => {

    if (event.keyCode === 13) {
        console.log(event.target.value);
        messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">09:21</div>
    <div class="message__text">
      ${event.target.value}
    </div>
  </div>
`;
    }

});