const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
  const currentLength = event.currentTarget.value.length;
  const validLength = Number(textInput.dataset.length);

  textInput.classList.remove("valid", "invalid");

  if (currentLength === validLength) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
