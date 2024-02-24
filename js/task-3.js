const userName = document.querySelector("#name-input");
const userNameOutput = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);

function handleInput(event) {
  const name = event.currentTarget.value.trim();

  return name === ""
    ? (userNameOutput.textContent = "Anonymous")
    : (userNameOutput.textContent = name);
}
