//toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
    }
  });
};
//                    sticky navbar           //
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
// remove icon tooge navbar when click navbar link

const portfolioSection = document.querySelector('.portofolio');

let links = document.querySelectorAll('header nav a');

links.forEach((link) => {
  if (link.id !== "portofolio-link") {
    link.addEventListener('click', () =>{
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
      portfolioSection.classList.remove('animated');
    });
  }
});

//animated portofolio page

const navbarPortfolio = document.querySelector('#portofolio-link');

navbarPortfolio.addEventListener('click', () => {
  portfolioSection.classList.add('animated');
});
