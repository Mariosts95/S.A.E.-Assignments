"use strict";

/* ----------IMAGES ARRAY---------- */

let images = [
  "images/Iron-Man.jfif",
  "images/Captain-America.jfif",
  "images/Thor.jfif",
  "images/Hulk.jfif",
  "images/Spider-Man.jfif",
  "images/Black-Panther.jfif",
];
//console.log(images);

/* ----------GALLERY INITIALIZATION---------- */

let i = 0;
document.getElementById("image").src = images[i];
//console.log(i);       //debug

const Refresh = () => {
  clearInterval(autoplay); //this to reset to the full view time of an image every time you press next/previous
  autoplay = setInterval(AutoPlay, 3 * 1000); //this to set the counter again
};

/* ----------NEXT BUTTON---------- */

let next_btn = document.getElementById("btnNext");
next_btn.addEventListener("click", () => {
  if (i < images.length - 1) {
    i++;
    document.getElementById("image").src = images[i];
    Refresh();
  } else {
    i = 0;
    document.getElementById("image").src = images[i];
    Refresh();
  }
});

/* ----------PREVIOUS BUTTON---------- */

let previous_btn = document.getElementById("btnPrevious");
previous_btn.addEventListener("click", () => {
  if (i <= images.length - 1 && i > 0) {
    i--;
    document.getElementById("image").src = images[i];
    Refresh();
  } else {
    i = 2;
    document.getElementById("image").src = images[i];
    Refresh();
  }
});

/* ----------AUTOPLAY GALLERY----------- */

let autoplay = setInterval(AutoPlay, 3 * 1000);
function AutoPlay() {
  if (i < images.length - 1) {
    i++;
    document.getElementById("image").src = images[i];
    Refresh();
  } else {
    i = 0;
    document.getElementById("image").src = images[i];
    Refresh();
  }
}
//setInterval(AutoPlay, 1000);

/* ----------PAUSE BUTTON----------- */

let pause_btn = document.getElementById("btnPause");

pause_btn.addEventListener("click", () => {
  play_btn.classList.remove("button-hiden");
  pause_btn.classList.add("button-hiden");
  clearInterval(autoplay);
});

/* ----------PLAY BUTTON----------- */

let play_btn = document.getElementById("btnPlay");

play_btn.addEventListener("click", () => {
  play_btn.classList.add("button-hiden");
  pause_btn.classList.remove("button-hiden");
  autoplay = setInterval(AutoPlay, 3 * 1000);
});

/* ----------DOT-LIST------------- */

let first_dot = document.getElementById("dot1");
first_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[0];
    Refresh();
});

let second_dot = document.getElementById("dot2");
second_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[1];
Refresh();
});

let third_dot = document.getElementById("dot3");
third_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[2];
Refresh();
});

let fourth_dot = document.getElementById("dot4");
fourth_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[3];
Refresh();
});

let fifth_dot = document.getElementById("dot5");
fifth_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[4];
Refresh();
});

let sixth_dot = document.getElementById("dot6");
sixth_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[5];
Refresh();
});
