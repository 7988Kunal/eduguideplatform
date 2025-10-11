window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Keep loader visible for 10 seconds
  setTimeout(() => {
    preloader.classList.add("hidden"); // fade out loader

    // After fade, hide loader and show content
    setTimeout(() => {
      preloader.style.display = "none";
      content.classList.remove("hidden");
    }, 600); // match CSS transition
  }, 10000); // 10 seconds
});

 const burger = document.querySelector('.ham-burger');
 const menu = document.querySelector('.source');

 burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    
    // Animation for burger
    burger.classList.toggle('toggle');
  });