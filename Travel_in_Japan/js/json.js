"use strict";
let tokyoPreview;
/* import main from "./assets/main.json"; */
/* fetch("./assets/main.json")
  .then((response) => response.json())
  .then((data) => { for ( const city of data.cities){
      tokyoPreview = city.tokyo.preview.title;
    }
    console.log(tokyoPreview);
    document.getElementById("tokyo_preview_title").innerText = tokyoPreview;
});
 */

fetch("./assets/main.json")
  .then((response) => response.json())
  .then((data) => {
    for (const city of data.cities) {
        document.getElementById("tokyo_preview_title").innerText = city.tokyo.preview.title;
    }
  });

/* const mainJson = () => {
    for (const city of cities){
        console.log(city.tokyo.preview.text);
    }
}

export default mainJson; */
/* const main =  */

/* const cities = [
  {
    tokyo: {
      preview: {
        title:
          "Fusing the futuristic with the traditional, Tokyo is a sprawling megacity bursting with a seemingly limitless number of things to do.",
        text:
          "A business and cultural megacenter that's home to tens of millions of people, Tokyo is also the crossroads where the Japanese interact with citizens from all over the world. The media love to focus on Harajuku's vibrant fashion, robot restaurants, maid cafes and the passionate uberfans known as otaku. As fast-paced as Tokyo’s innovation is, the metropolis is just as devoted to preserving tradition through its historical gardens, shrines and temples. Known for its extreme attention to detail, Japan's capital is home to some of the best Japanese food in the country, with 234 Michelin-starred restaurants—more than any other city. Whatever your cultural interests are, Tokyo is likely to have you covered. Home to many world-class art galleries and museums, staggeringly diverse nightlife options and cutting-edge technology, you'll never be stuck for things to do or places to go in Tokyo.",
      },
    },
  },
]; */
