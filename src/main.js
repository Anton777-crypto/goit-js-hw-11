// main.js
import { fetchImages } from './pixabay-api.js';
import { renderImages, clearGallery } from './render-functions.js';

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
<script type="module" src="./js/pixabay-api.js"></script>;
