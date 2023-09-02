const curentValue = document.querySelector("#value");
const decresButton = document.querySelector('button[data-action="decrement"]');
const incresButton = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

decresButton.addEventListener("click", () => {
  counterValue -= 1;
  curentValue.textContent = counterValue;
});

incresButton.addEventListener("click", () => {
  counterValue += 1;
  curentValue.textContent = counterValue;
});
