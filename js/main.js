const activate = document.querySelector(".activate");
const deactivate = document.querySelector(".deactivate");
const btnStart = document.querySelector(".start-btn");
const content = document.querySelector(".happy__content");
const btnContainer = document.querySelector(".start__inner");

btnStart.addEventListener("click", () => {
  btnContainer.classList.add("deactivate");
  content.classList.add("activate");
});
