const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listMain = document.querySelector("#ingredients");

const listEl1 = document.createElement("li");
listEl1.textContent = ingredients[0];
listEl1.classList.add("item");

const listEl2 = document.createElement("li");
listEl2.textContent = ingredients[1];
listEl2.classList.add("item");

const listEl3 = document.createElement("li");
listEl3.textContent = ingredients[2];
listEl3.classList.add("item");

const listEl4 = document.createElement("li");
listEl4.textContent = ingredients[3];
listEl4.classList.add("item");

const listEl5 = document.createElement("li");
listEl5.textContent = ingredients[4];
listEl5.classList.add("item");

const listEl6 = document.createElement("li");
listEl6.textContent = ingredients[5];
listEl6.classList.add("item");

listMain.append(listEl1, listEl2, listEl3, listEl4, listEl5, listEl6);

console.dir("#ingredients");

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

//     Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
