function goBack() {
  window.history.back();
}

let messageList: NodeListOf<HTMLElement> = document.querySelectorAll(".message");

for (let i = 0; i < messageList.length; i++) {
  let randomNum = Math.floor(Math.random() * 25);
  messageList[i].style.marginLeft = randomNum + "px";
}
