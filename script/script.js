gsap.registerPlugin(ScrollTrigger);

gsap.from(".container", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
  }
});

gsap.to(".scroll-down-arrow", {
    y: 10,
    opacity: 0,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
gsap.to(".scroll-down-arrow span", {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
  
gsap.to("h1", {
    y: -10,

    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

const body = document.querySelector('.body');

let scrollTimer;

// Ajouter un écouteur d'évènement scroll sur la fenêtre
window.addEventListener('scroll', function() {
  // Ajouter la classe .is-scrolling à la balise body
  body.classList.add('is-scrolling');
  
  // Annuler le minuteur existant (s'il y en a un) pour en créer un nouveau
  clearTimeout(scrollTimer);
  
  // Stocker un minuteur de 100ms
  scrollTimer = setTimeout(function() {
    // Enlever la classe .is-scrolling de la balise body
    body.classList.remove('is-scrolling');
  }, 100);
});