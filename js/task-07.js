/*
  Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
*/

const rangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const handleRangeChange = event => {
  spanRef.style.fontSize = `${event.target.valueAsNumber}px`;
};

rangeRef.addEventListener('input', handleRangeChange);
