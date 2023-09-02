const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value, password.value);
  if (!email.value || !password.value) {
    return alert("Wypełnij wszystkie pola!!!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  form.reset();
});
