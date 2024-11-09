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
           <img class="images" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
           </a>
           <div class="info">
             <p><span class="info-p">Likes:</span>  ${image.likes}</p>
             <p><span class="info-p">Views:</span> ${image.views}</p>
             <p><span class="info-p">Comments:</span> ${image.comments}</p>
             <p><span class="info-p">Comments:</span> ${image.downloads}</p>

             </div>
             </li>
           </ul>
         </div>`;
    })
    .join('');
  gallery.innerHTML = markup;
  lightBox.refresh();
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
