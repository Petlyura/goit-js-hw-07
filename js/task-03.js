/*
	Получить массив имен пользователей по полу (поле gender).
*/
/*
  Напиши скрипт для создания галлереи изображений по массиву данных.

  В HTML есть список ul#gallery.

  Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

  Все элементы галереи должны добавляться в DOM за одну операцию вставки.
  Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
*/

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const makeGalery = function ({ url, alt }) {
//   const galeryListItemRef = document.createElement('li');
//   galeryListItemRef.classList.add('galery-list__item');

//   const galeryListImageRef = document.createElement('img');
//   galeryListImageRef.classList.add('galery-list__image');
//   galeryListImageRef.setAttribute('src', url);
//   galeryListImageRef.setAttribute('alt', alt);

//   galeryListItemRef.appendChild(galeryListImageRef);

//   return galeryListItemRef;
// };

// const galeryImage = images.map(element => makeGalery(element));

// const galleryListRef = document.querySelector('#gallery');
// galleryListRef.append(...galeryImage);

//==============================================================================

/*
  используя шаблонные строки и insertAdjacentHTML()
*/

const makeGalery = function (elementRef, { url, alt }) {
  elementRef.insertAdjacentHTML(
    'beforeend',
    `<li class="galery-list__item">
    <img src="${url}" class="galery-list__image" alt="${alt}" />
    </li>`,
  );
};

const galleryListRef = document.querySelector('#gallery');

const renderGallery = (arr, elementToInsert) => {
  arr.map(element => makeGalery(elementToInsert, element));
};

renderGallery(images, galleryListRef);
