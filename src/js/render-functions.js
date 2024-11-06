// render - functions.js;

import simpleLightbox from 'simplelightbox';

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

  const lightBox = new simpleLightbox('.gallary a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
