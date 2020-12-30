'use stict';

let i = 0; // Start point
let images = []; // Images Array
let time = 3000; // Time Between Switch


// Image list
images[0] = 'images/1.jpg';
images[1] = 'images/2.jpg';
images[2] = 'images/3.jpg';
images[3] = 'images/4.jpg';
images[4] = 'images/5.jpg';

// Change Image

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
};

window.onload = changeImg;