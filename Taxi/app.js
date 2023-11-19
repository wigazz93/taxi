let menu = document.querySelector(".fa-bars");
let nav = document.querySelector(".nav");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("nav-toggle");
};
