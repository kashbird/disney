const logo = document.querySelector(".logo");
const txt = document.querySelector(".txt");
const subs = document.querySelector(".subs");
const mouse = document.querySelector(".mouse");

window.addEventListener("scroll", ()=> {
  logo.style.top = "18%";
  logo.style.width = "120px"
  logo.style.hight = "66px"
  logo.style.backgroundSize = "contain"
  logo.style.backgroundPosition = "center"
  logo.style.backgroundRepeat = "no-repeat"
  logo.style.transition = "1s"

  txt.style.top = "28%";
  txt.style.transition = "1s"
  txt.style.fontSize = "24px"
  txt.style.lineHeight = "36px"

  subs.style.opacity = "1"
  subs.style.transition = "1s"

  mouse.style.opacity = "0"
  mouse.style.transition = ".5s"
})