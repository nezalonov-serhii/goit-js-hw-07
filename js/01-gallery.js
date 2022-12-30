import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function addGalleryItems(galleryItems) {
   return galleryItems
      .map(
         ({ preview, original, description }) =>
            `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>`
      )
      .join("");
}

galleryEl.insertAdjacentHTML("beforeend", addGalleryItems(galleryItems));

galleryEl.addEventListener("click", onImgClick);

function onImgClick(event) {
   event.preventDefault();

   if (event.target.nodeName !== "IMG") {
      return;
   }

   const instance = basicLightbox.create(
      `<img width="1400" height="900" src="${event.target.dataset.source}">`
   );
   instance.show();

   closePictures(instance);
}

function closePictures(instance) {
   document.addEventListener("keydown", closePicturePressingEscape);

   function closePicturePressingEscape(event) {
      if (event.code === "Escape") {
         instance.close();

         document.removeEventListener("keydown", closePicturePressingEscape);
      }
   }
}
