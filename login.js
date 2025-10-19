const burger = document.querySelector('.ham-burger');
const menu = document.querySelector('.source');

 burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    
    // Animation for burger
    burger.classList.toggle('toggle');
  });