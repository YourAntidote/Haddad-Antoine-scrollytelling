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


window.addEventListener('scroll', function() {

  body.classList.add('is-scrolling');
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(function() {
    body.classList.remove('is-scrolling');
  }, 100);
});


ScrollTrigger.create({
  trigger: ".wrapper",
  start: "top 20%", 
  end: "bottom 8%",

});

gsap.to('.ixy-mort', { 
  scrollTrigger: {
 
    scrub: true,

    start: 'top 10%',
    end: 'bottom 0%',
    trigger: ".ixy-mort"
  },
})



/* ---------ROCHE TIMELINE ---------*/

let anim = gsap.timeline()
  .paused(false)
    .to('.petite-roche.no1', { duration: 25, y: '52vmin', rotation: 400,  repeat: '-1',ease :'none' }, '<')
    .to('.petite-roche.no2', { duration: 30, y: '70vmin', rotation: 360,  repeat: '-1', ease: 'none'}, '<')
    .to('.petite-roche.no3', { duration: 20, y: '65vmin', rotation: 360,  repeat: '-1', ease: 'none'}, '<')
    .to('.petite-roche.no4', { duration: 15,  y: '48vmin',rotation: 360, repeat: '-1', ease:'none' }, '<')



let animFeuille = gsap.timeline()
  .paused(false)
    .to('.feuille.no1', { duration: 25, y: '52vmin', rotation: 400, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no2', { duration: 30, y: '70vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no3', { duration: 20, y: '65vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no4', { duration: 15, y: '48vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no5', { duration: 15, y: '48vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')

    
