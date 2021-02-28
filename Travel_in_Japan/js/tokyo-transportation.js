"use strict";

fetch("./assets/tokyo-transportation.json")
  .then((response) => response.json())
  .then((data) => {
    for (const city of data.cities) {
      document.getElementById("tokyo_preview_title").innerText =
        city.tokyo.preview.title;
      document.getElementById("tokyo_preview_text").innerText =
        city.tokyo.preview.text;
      document.getElementById("tokyo-temperature-title").innerText =
        city.tokyo.temperatures.title;
      document.getElementById("jr-narita-express-info").innerText =
        city.tokyo.transportation.naritaAirport.jrNaritaExpress.info;
      document.getElementById("jr-narita-express-text").innerText =
        city.tokyo.transportation.naritaAirport.jrNaritaExpress.text;
      document.getElementById("sobu-line-info").innerText =
        city.tokyo.transportation.naritaAirport.sobuLine.info;
      document.getElementById("sobu-line-text").innerText =
        city.tokyo.transportation.naritaAirport.sobuLine.text;
      document.getElementById("keisei-skyliner-info").innerText =
        city.tokyo.transportation.naritaAirport.keiseiSkyliner.info;
      document.getElementById("keisei-skyliner-text").innerText =
        city.tokyo.transportation.naritaAirport.keiseiSkyliner.text;
      document.getElementById("keisei-limited-express-info").innerText =
        city.tokyo.transportation.naritaAirport.keiseiLimitedExpress.info;
      document.getElementById("keisei-limited-express-text").innerText =
        city.tokyo.transportation.naritaAirport.keiseiLimitedExpress.text;
      document.getElementById("limousine-bus-info").innerText =
        city.tokyo.transportation.naritaAirport.limousineBus.info;
      document.getElementById("limousine-bus-text").innerText =
        city.tokyo.transportation.naritaAirport.limousineBus.text;
      document.getElementById("discount-bus-info").innerText =
        city.tokyo.transportation.naritaAirport.discountBus.info;
      document.getElementById("discount-bus-text").innerText =
        city.tokyo.transportation.naritaAirport.discountBus.text;

      document.getElementById("tokyo-monorail-info").innerText =
        city.tokyo.transportation.hanedaAirport.tokyoMonorail.info;
      document.getElementById("tokyo-monorail-text").innerText =
        city.tokyo.transportation.hanedaAirport.tokyoMonorail.text;
      document.getElementById("keikyu-railways-info").innerText =
        city.tokyo.transportation.hanedaAirport.keikyuRailways.info;
      document.getElementById("keikyu-railways-text").innerText =
        city.tokyo.transportation.hanedaAirport.keikyuRailways.text;
      document.getElementById("limousine-bus-haneda-info").innerText =
        city.tokyo.transportation.hanedaAirport.limousineBus.info;
      document.getElementById("limousine-bus-haneda-text").innerText =
        city.tokyo.transportation.hanedaAirport.limousineBus.text;
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



//let tokyoPreview;
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
