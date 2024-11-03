// render - functions.js;

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(image => {
      return `
          <div class="gallery-item">
          <ul class='ul-gallery'>
          <li class='li-gallery'>
          <a>
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            </a>
            <div class="info">
              <p>Likes: ${image.likes}</p>
              <p>Views: ${image.views}</p>
              <p>Comments: ${image.comments}</p>
              </div>
              </li>
            </ul>
          </div>`;
    })
    .join('');
  gallery.innerHTML = markup;
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
