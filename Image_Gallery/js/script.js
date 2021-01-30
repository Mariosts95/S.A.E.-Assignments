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
  clearInterval(autoplay);                          //this to reset to the full view time of an image every time you press next/previous
  autoplay = setInterval(AutoPlay, 3 * 1000);       //this to set the counter again
};

/* ----------NEXT BUTTON---------- */

let next_btn = document.getElementById("btnNext");
next_btn.addEventListener("click", () => {
  if (i < images.length - 1) {
    i++;
    document.getElementById("image").src = images[i];
    Refresh();
    changeTitle(i);
    changeContent(i);
  } else {
    i = 0;
    document.getElementById("image").src = images[i];
    Refresh();
    changeTitle(i);
    changeContent(i);
  }
});

/* ----------PREVIOUS BUTTON---------- */

let previous_btn = document.getElementById("btnPrevious");
previous_btn.addEventListener("click", () => {
  if (i <= images.length - 1 && i > 0) {
    i--;
    document.getElementById("image").src = images[i];
    Refresh();
    changeTitle(i);
    changeContent(i);
  } else {
    i = 2;
    document.getElementById("image").src = images[i];
    Refresh();
    changeTitle(i);
    changeContent(i);
  }
});

/* ----------AUTOPLAY GALLERY----------- */

let autoplay = setInterval(AutoPlay, 3 * 1000);
function AutoPlay() {
  if (i < images.length - 1) {
    i++;
    document.getElementById("image").src = images[i];
    Refresh();
    changeTitle(i);
    changeContent(i);
  } else {
    i = 0;
    document.getElementById("image").src = images[i];
    Refresh();
    changeTitle(i);
    changeContent(i);
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
  changeTitle(0);
  changeContent(0);
});

let second_dot = document.getElementById("dot2");
second_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[1];
  Refresh();
  changeTitle(1);
  changeContent(1);
});

let third_dot = document.getElementById("dot3");
third_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[2];
  Refresh();
  changeTitle(2);
  changeContent(2);
});

let fourth_dot = document.getElementById("dot4");
fourth_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[3];
  Refresh();
  changeTitle(3);
  changeContent(3);
});

let fifth_dot = document.getElementById("dot5");
fifth_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[4];
  Refresh();
  changeTitle(4);
  changeContent(4);
});

let sixth_dot = document.getElementById("dot6");
sixth_dot.addEventListener("click", () => {
  document.getElementById("image").src = images[5];
  Refresh();
  changeTitle(5);
  changeContent(5);
});

/* ----------ΤΕΧΤ---------- */

function changeTitle(i) {

  let hero_title = document.getElementById("hero-info-title");

  switch (i){
    case 1 :
    hero_title.innerHTML = "Captain - America";
    break;
    case 2 :
    hero_title.innerHTML = "Thor";
    break;
    case 3 :
    hero_title.innerHTML = "Hulk";
    break;
    case 4 :
    hero_title.innerHTML = "Spider - Man";
    break;
    case 5 :
    hero_title.innerHTML = "Black - Panther";
    break;
    default:
    hero_title.innerHTML = "Iron - Man";
    break;
    }
};


function changeContent() {
  let hero_info_content = document.getElementById("hero-info-content");

  switch (i) {
    case 1:
      hero_info_content.innerHTML = "Captain Steven Grant \"Steve\" Rogers is a World War II veteran, a founding member of the Avengers, and Earth's first known superhero. Rogers grew up suffering from numerous health problems, and upon America's entry into World War II, he was rejected from serving in the United States Army despite several attempts to enlist. Rogers ultimately volunteered for Project Rebirth, where he was the only recipient of the Super Soldier Serum developed by Abraham Erskine under the Strategic Scientific Reserve. The serum greatly enhanced Rogers' physical abilities to superhuman levels. After Erskine's assassination and being doubted by SSR head director Chester Phillips, Rogers was relegated to performing in war bond campaigns, where he posed as a patriotic mascot under the moniker of Captain America.";
      break;
    case 2:
      hero_info_content.innerHTML =
        "Thor Odinson is the Asgardian God of Thunder, the former king of Asgard and New Asgard, and a founding member of the Avengers. When his irresponsible and impetuous behavior reignited a conflict between Asgard and Jotunheim, Thor was denied the right to become king, stripped of his power, and banished to Earth by Odin. While exiled on Earth, Thor learned humility, finding love with Jane Foster, and helped save his new friends from the Destroyer sent by Loki. Due to his selfless act of sacrifice, Thor redeemed himself in his father's eyes and was granted his power once more, which he then used to defeat Loki's schemes of genocide.";
      break;
    case 3:
      hero_info_content.innerHTML =
        "Doctor Robert Bruce Banner, M.D., Ph.D., is a renowned scientist and a founding member of the Avengers. Highly respected for his work in biochemistry, nuclear physics, and gamma radiation, he was commissioned by Thaddeus Ross to recreate the Super Soldier Serum which created Captain America, although Ross elected not to inform Banner what he was creating. However, when an exposure to high levels of gamma radiation instead of vita radiation went awry, the mild-mannered scientist had found that when angered, provoked or excited, he would transform into the huge, rage-fueled, nearly mindless creature known as Hulk.";
      break;
    case 4:
      hero_info_content.innerHTML =
        "Peter Benjamin Parker is a high school student who gained spider-like abilities, fighting crime across New York City as the alter ego Spider-Man, hoping someday, he will live up to his heroes in the Avengers. While Parker juggled all his continued superhero duties with the demands of his high-school life, he was approached by Tony Stark who recruited Spider-Man to join the Avengers Civil War, putting Spider-Man into the brief conflict with his personal hero, Captain America. Parker then agreed and was given his new suit as well as brand new Stark technology in exchange for all his help, although Stark still did not make him an official member of the Avengers and instead returned Parker back home to continue his own hero work.";
      break;
    case 5:
      hero_info_content.innerHTML =
        "T'Challa is the King of Wakanda and the eldest child of T'Chaka and Ramonda. As the Wakandan monarch, he became the holder of the Black Panther mantle. Following the death of his father in the bombing attack orchestrated by Helmut Zemo, T'Challa had set out to kill the Winter Soldier, who was widely believed to be responsible for the attack. During his attempt to find the Winter Soldier, Black Panther had joined a Civil War between the Avengers, where he sided with Iron Man. However, Black Panther eventually learned that Zemo was really the one who had been responsible for his father's demise, as he captured Zemo, handing him over to Everett Ross, while he also vowed never to allow desires of vengeance to consume him again.";
      break;
    default:
      hero_info_content.innerHTML = "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist. With his great wealth and exceptional technical knowledge, Stark was one of the world's most powerful men following the deaths of his parents and enjoyed the playboy lifestyle for many years until he was kidnapped by the Ten Rings in Afghanistan, while demonstrating a fleet of Jericho missiles. With his life on the line, Stark created an armored suit which he used to escape his captors. Upon returning home, he utilized several more armors to use against terrorists, as well as Obadiah Stane who turned against Stark. Stark enjoyed the fame that came with his new secret identity and decided to share it with the world, publicly revealing himself as Iron Man.";
      break;
  }

};