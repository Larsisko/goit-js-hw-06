const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert("Wypełnij wszystkie pola!!!");
  }

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  form.reset();
});
