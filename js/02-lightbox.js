import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function addGalleryItems(galleryItems) {
   return galleryItems
      .map(
         ({ preview, original, description }) =>
            `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
      )
      .join("");
}

galleryEl.insertAdjacentHTML("beforeend", addGalleryItems(galleryItems));

galleryEl.addEventListener("click", showBigPictures);

function showBigPictures(event) {
   if (event.target === event.currentTarget) {
      return;
   }

   event.preventDefault();
}

const gallery = new SimpleLightbox(".gallery__item");

gallery.on("show.simplelightbox", function () {
   const { options } = gallery;

   options.captionsData = "alt";
   options.captionDelay = 250;
});
