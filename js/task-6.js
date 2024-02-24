function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userNumber = document.querySelector("input");
userNumber.addEventListener("input", handleInput);

const container = document.querySelector("#boxes");

let elements = 0;

function handleInput(event) {
  elements = event.currentTarget.value;
}

function createBoxes(amount) {
  container.innerHTML = "";

  let squareSize = 30;

  for (let box = 0; box < amount; box += 1) {
    const square = document.createElement("div");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor = getRandomHexColor();

    squareSize += 10;

    container.append(square);
  }
}

const createCollection = document.querySelector("button[data-create]");
createCollection.addEventListener("click", handleClickCreate);

function handleClickCreate() {
  if (elements < 1 || elements > 100) {
  } else {
    createBoxes(elements);
	
		userNumber.value = "";
  }
}

const destroyCollection = document.querySelector("button[data-destroy]");
destroyCollection.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  container.innerHTML = "";
  userNumber.value = "";
}
