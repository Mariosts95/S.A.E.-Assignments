'use strict';
/* ----------GALLERY INITIALIZATION---------- */
let images = [
  './images/gallery/gallery-image-1.jpg',
  './images/gallery/gallery-image-2.jpg',
  './images/gallery/gallery-image-3.jpg',
  './images/gallery/gallery-image-4.jpg',
  './images/gallery/gallery-image-5.jpg',
];
let autoplay = setInterval(Autoplay, 3000);
let i = 0;
let dots = document.getElementsByClassName('dot');

function Refresh(i) {
  document.getElementById('image').src = images[i];
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[i].classList.toggle('active');
}

/* ----------OVERFLOW CHECK---------- */
function Autoplay() {
  if (i < images.length - 1) {
    i++;
    Refresh(i);
  } else {
    i = 0;
    Refresh(i);
  }
}

/* ----------NEXT BUTTON---------- */
document.getElementById('next-btn').addEventListener('click', () => {
  if (i < images.length - 1) {
    i++;
    clearInterval(autoplay);
    autoplay = setInterval(Autoplay, 3000);
    Refresh(i);
  } else {
    clearInterval(autoplay);
    autoplay = setInterval(Autoplay, 3000);
    i = 0;
    Refresh(i);
  }
});

/* ----------PREVIOUS BUTTON---------- */
document.getElementById('prev-btn').addEventListener('click', () => {
  if (i <= images.length - 1 && i > 0) {
    i--;
    clearInterval(autoplay);
    autoplay = setInterval(Autoplay, 3000);
    Refresh(i);
  } else {
    i = images.length - 1;
    clearInterval(autoplay);
    autoplay = setInterval(Autoplay, 3000);
    Refresh(i);
  }
});

window.onload = Refresh(i); //Enables the gallery on load
