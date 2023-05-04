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







/* ---------Animation Chapitre 1 ---------*/
/*
gsap.to(
  ".animable",
  {
    scrollTrigger: {
      trigger: "#chapitre1",
      start: "50% 50%", 
      pin: true,
      scrub: true,

    }
  }
);
*/
gsap.timeline({ scrollTrigger: {
    pin:true,
    markers: true,
    scrub: true,
    start: 'top top',
    end:"500% top" ,
    trigger: '#chapitre1',
    toggleActions: "play reverse reverse play"
  }})
.to('#homme-falaise', {
  y: '50vh',
  duration: 1,
});

gsap.timeline({ scrollTrigger: {
  pin:true,
  markers: true,
  scrub: true,
  start: 'top top',
  end:"500% top" ,
  trigger: '#chapitre1',
  toggleActions: "play reverse reverse play"
}})
.from('#ixy-mort', {
y: '100vh',
duration: 1,
});



let anim = gsap.timeline()
  .paused(false)
    .to('.petite-roche.no1', { duration: 25, y: '52vmin', rotation: 400, repeat: '-1', ease :'none'}, '<')
    .to('.petite-roche.no2', { duration: 30, y: '70vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.petite-roche.no3', { duration: 20, y: '65vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.petite-roche.no4', { duration: 15, y: '48vmin', rotation: 360, repeat: '-1', ease:'none' }, '<')


/* ---------Animation Chapitre 6 ---------*/
let animFeuille = gsap.timeline()
  .paused(false)
    .to('.feuille.no1', { duration: 25, y: '52vmin', rotation: 400, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no2', { duration: 30, y: '70vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no3', { duration: 20, y: '65vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no4', { duration: 15, y: '48vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no5', { duration: 15, y: '48vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')

    




/*gsap.to(
  "#chapitre2",
  {
    scrollTrigger: {
  trigger: "#chapitre2",
  start: "50% 50%", 
  pin: true,
  scrub: true,

  }
}
);
*/
