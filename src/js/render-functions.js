// render - functions.js;

import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Подписи к изображениям берутся из атрибута alt
  captionDelay: 250, // Задержка перед отображением подписи
  animationSpeed: 300, // Скорость анимации при переходе
  loop: true, // Включает циклический просмотр галереи
});
export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(image => {
      return `
    <div class="gallery-item">
         <ul class='ul-gallery'>
         <li class='li-gallery'>
         <a  href='${image.largeImageURL}' data-lightbox = 'gallery'>
           <img class="images" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
           </a>
           <div class="info">
             <p class="info-info"><span class="info-p">Likes:</span>  ${image.likes}</p>
             <p class="info-info"><span class="info-p">Views:</span> ${image.views}</p>
             <p class="info-info"><span class="info-p">Comments:</span> ${image.comments}</p>
             <p class="info-info"><span class="info-p">Comments:</span> ${image.downloads}</p>

             </div>
             </li>
           </ul>
         </div>`;
    })
    .join('');
  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
