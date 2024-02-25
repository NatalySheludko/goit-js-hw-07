function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBgColor = document.querySelector("body");
const getColorValue = document.querySelector(".color");

const clickBtn = document.querySelector(".change-color");

clickBtn.addEventListener("click", handleClick);

function handleClick() {
  const randomColor = getRandomHexColor();
  changeBgColor.style.backgroundColor = randomColor;
  getColorValue.textContent = randomColor;
}
