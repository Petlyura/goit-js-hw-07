/*
  Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const handleInputChange = event => {
  const input = event.target;

  if (input.value === '') {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = input.value;
  }
};

inputRef.addEventListener('input', handleInputChange);
