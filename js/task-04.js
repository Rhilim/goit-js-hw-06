// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати 
// його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та 
//     ініціалізуй її значенням 0.
//     Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//     Оновлюй інтерфейс новим значенням змінної counterValue.



const counterValue = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    console.log('Клікнули на кнопку Декремент');

    counterValue.decrement();
    console.log(counterValue);

valueEl.textContent = counterValue.value;
});
incrementBtn.addEventListener("click", function () {
  console.log("Клікнули на кнопку Інкремент");
  
  counterValue.increment();
  console.log(counterValue);

  valueEl.textContent = counterValue.value;
});