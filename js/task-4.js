const formInputLogin = document.querySelector(".login-form");

formInputLogin.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputElements = event.currentTarget.elements;

  const userEmail = inputElements.email.value.trim();
  const userPassword = inputElements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const formInfo = {
      email: `${userEmail}`,
      password: `${userPassword}`,
    };

    console.log(formInfo);
  }

  event.currentTarget.reset();
}
