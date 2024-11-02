// render-functions.js

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(image => {
      return `
          <div class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            <div class="info">
              <p>Likes: ${image.likes}</p>
              <p>Views: ${image.views}</p>
              <p>Comments: ${image.comments}</p>
            </div>
          </div>`;
    })
    .join('');
  gallery.innerHTML = markup;
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
