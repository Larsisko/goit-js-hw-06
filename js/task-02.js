const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ingredientList.appendChild(li);
// });

const ingredientsArr = ingredients.map((ingeredient) => {
  const li = document.createElement("li");
  li.textContent = ingeredient;
  return li;
});
ingredientList.append(...ingredientsArr);
