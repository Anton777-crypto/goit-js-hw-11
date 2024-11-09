// render - functions.js;

import simpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightBox = new simpleLightbox('.gallеry a', {
  captionsData: 'alt',
  captionDelay: 250,
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
           <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
           </a>
           <div class="info">
             <p>Likes: ${image.likes}</p>
             <p>Views: ${image.views}</p>
             <p>Comments: ${image.comments}</p>
             <p>Comments: ${image.downloads}</p>

             </div>
             </li>
           </ul>
         </div>`;
    })
    .join('');
  gallery.innerHTML = markup;
  lightBox.refresh();
}
const ulgallery = document.querySelector('.ul-gallery');

ulgallery.style.display = 'flex';
ulgallery.style.gap = '10px';
ulgallery.style.flexDirection = 'column';

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
