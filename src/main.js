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

  page = 1; // Сбрасываем номер страницы при новом поиске
  clearGallery(); // Очищаем предыдущие результаты

  try {
    const data = await fetchImages(query, page, perPage);
    renderImages(data.hits);
  } catch (error) {
    console.error('Ошибка загрузки изображений:', error);
  }
});
