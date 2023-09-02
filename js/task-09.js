function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBtn = document.querySelector(".change-color");
const bodyColor = document.querySelector(".color");
changeBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  bodyColor.textContent = randomColor;
});
