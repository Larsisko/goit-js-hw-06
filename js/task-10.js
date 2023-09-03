function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type = "number"]');
const creatBtn = document.querySelector("button[data-create");
const removeBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

creatBtn.addEventListener("click", createBoxes);
removeBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  const boxs = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10} px`;
    box.style.backgroundColor = getRandomHexColor();
    boxs.push(box);
  }
  divBox.append(...boxs);
}

function destroyBoxes() {
  divBox.innerHTML = "";
}
