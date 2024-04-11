// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');

// Stworzenie galerii
galleryItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.setAttribute('href', item.original);
    link.setAttribute('data-lightbox', 'gallery');
    link.classList.add('gallery__link');

    const image = document.createElement('img');
    image.setAttribute('src', item.preview);
    image.setAttribute('alt', item.description);
    image.classList.add('gallery__image');

    link.appendChild(image);
    listItem.appendChild(link)
    galleryContainer.appendChild(listItem);
});

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionDelay: 250,
});

galleryContainer.addEventListener('click', function (event) {
    event.preventDefault();
});