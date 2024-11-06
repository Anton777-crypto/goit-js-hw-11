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
  if (input.target.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'center',
      maxWidth: '250px ',
      color: 'rgb(255, 162, 0)',
    });
  }
  try {
    const data = await fetchImages(query, page, perPage);
    console.log(data);
    renderImages(data);
  } catch (error) {
    console.log('Ошибка загрузки изображений:', error);
  }
});
