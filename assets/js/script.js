//dark theme
const chk = document.getElementById("chk");
let audio_1 = document.getElementById("audio_one");
let audio_2 = document.getElementById("audio_two");

chk.addEventListener("change", (theme) => {
  if (theme.target.checked) {
    document.querySelector(':root').setAttribute("data-theme", "dark");
    audio_1.play();
  } else {
    document.querySelector(':root').setAttribute("data-theme", "light");
    audio_2.play();
  }
});

// hamburger
let openMenu = document.getElementsByClassName('fa-bars')[0]
let closeMenu = document.getElementsByClassName('fa-times')[0]
let navlinks = document.getElementsByClassName('nav-links')[0]

openMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("0")
});

closeMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("100%")
});