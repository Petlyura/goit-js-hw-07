/*
	Получить массив объектов пользователей по цвету глаз (поле eyeColor).
*/
/*
  В HTML есть пустой список ul#ingredients.
  В JS есть массив строк ingredients.

  Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientItem = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;

  return liRef;
});

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...ingredientItem);
