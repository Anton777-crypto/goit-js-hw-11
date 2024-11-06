// main.js
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
let page = 1;
const perPage = 12;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, You have not entered anything. Please check your entry.',
      position: 'center',
      maxWidth: '250px ',
      color: 'rgb(255, 162, 0)',
    });
    return;
  }

  page = 1;
  clearGallery();

  try {
    const data = await fetchImages(query, page, perPage);
    console.log(data);
    renderImages(data);
  } catch (error) {
    console.log('Ошибка загрузки изображений:', error);
  }
});
