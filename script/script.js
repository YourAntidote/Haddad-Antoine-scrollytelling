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

  },
})