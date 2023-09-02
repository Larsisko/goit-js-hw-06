const textFont = document.querySelector("#text");
const fontControl = document.querySelector("#font-size-control");

fontControl.addEventListener("input", (event) => {
  textFont.style.fontSize = `${event.currentTarget.value}px`;
});
