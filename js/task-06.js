/*
  Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

  * Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
  * Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
  
  Для добавления стилей, используй CSS-классы valid и invalid.
*/

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', event => {
  const input = event.target;
  const validInputLength = Number(input.dataset.length);

  inputRef.classList.add('invalid');

  if (input.value.length === validInputLength) {
    inputRef.classList.replace('invalid', 'valid');
  } else {
    inputRef.classList.replace('valid', 'invalid');
  }
});
