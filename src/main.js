// main.js
import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
let page = 1;
const perPage = 12;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) return;

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
