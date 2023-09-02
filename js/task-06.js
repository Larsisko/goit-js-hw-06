const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
  const currentLength = event.currentTarget.value;
  const validInput = textInput.dataset.length;
  if (currentLength.length === 0) {
    textInput.classList.remove("invalid");
    textInput.classList.remove("valid");
    return;
    ("valid");
  } else if (currentLength.length >= validInput) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
    return;
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
