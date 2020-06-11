/*
  Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

  Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

  Каждый созданный div:

  * Имеет случайный rgb цвет фона
  * Размеры самого первого div - 30px на 30px
  * Каждый следующий div после первого, должен быть шире и выше предыдущего на  10px
  
Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = function (amount) {
  let size = 20;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');

    const red = Math.round(Math.random() * (100 - 1) + 1);
    const green = Math.round(Math.random() * (100 - 1) + 1);
    const blue = Math.round(Math.random() * (100 - 1) + 1);

    size += 10;
    box.setAttribute(
      'style',
      `width:${size}px; height:${size}px; background-color: rgb(${red}%, ${green}%, ${blue}%)`,
    );

    boxesRef.appendChild(box);
  }

  return boxesRef;
};

const handleRenderBtnRef = () => {
  const boxesAmountInput = inputRef.valueAsNumber;
  createBoxes(boxesAmountInput);
};

const handleDestroyBtnRef = () => {
  boxesRef.innerHTML = '';
};

renderBtnRef.addEventListener('click', handleRenderBtnRef);
destroyBtnRef.addEventListener('click', handleDestroyBtnRef);
