/*
  Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

  * Создай переменную counterValue в которой будет хранится текущее значение счетчика.
  * Создай функции increment и decrement для увеличения и уменьшения значения счетчика
  * Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);

const spanRef = document.querySelector('#value');

let counterValue = Number(spanRef.textContent);

incrementBtnRef.addEventListener('click', handleIncrementBtn);
decrementBtnRef.addEventListener('click', handleDecrementBtn);

function handleIncrementBtn() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}

function handleDecrementBtn() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}
