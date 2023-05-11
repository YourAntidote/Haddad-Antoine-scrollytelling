gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
//gsap.registerPlugin(MorphSVGPlugin);
//gsap.registerPlugin(DrawSVGPlugin);


gsap.timeline({ 
  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
  }
})
.from(".container", {opacity: 0, y: -50, duration: 1, ease: "power2.out"})
.to(".scroll-down-arrow", {y: 10, opacity: 0, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut"})
.to(".scroll-down-arrow span", { y: 10, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut"},'<')
.to("h1", { y: -10, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut"},'<')


const body = document.querySelector('.body');

let scrollTimer;

window.addEventListener('scroll', function() {

  body.classList.add('is-scrolling');
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(function() {
    body.classList.remove('is-scrolling');
  }, 100);
});


/* --------------------------------------Animation Chapitre 1 --------------------------------------------*/


gsap.timeline({ 
  scrollTrigger: {
    scrub: true,
    pin: true,
    start: 'top top',
    end:"500% top" ,
    trigger: '#chapitre1',
    toggleActions: "restart complete reverse reset"
  }})
.to('#homme-falaise', { y: '50vh', duration: 1,})
.to('.petite-roche',  { y: '100vh', duration: 1,},'<')
.from('#ixy-mort',    { y: '100vh', duration: 1, opacity: 0})



//Si l'élément est visible fait cela, sinon arrête-la
var element1 = document.getElementById('roche');
var options1 = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0 
};

var observer1 = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      anim.play();
    }
  });
}, options1);
observer1.observe(element1);


let anim = gsap.timeline()
  .paused(true)
    .to('.petite-roche.no1', { duration: 25, rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.petite-roche.no2', { duration: 30, rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.petite-roche.no3', { duration: 20, rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.petite-roche.no4', { duration: 15, rotation: 360, repeat: '-1', ease: 'none'}, '<')


/* --------------------------------------Animation Chapitre 2 --------------------------------------------*/




gsap.timeline({ scrollTrigger: {
  pin:true,
  scrub: true,
  start: 'top top',
  end:"400% top" ,
  trigger: '#chapitre2',
  toggleActions: "restart complete reverse reset"
  }
})
.to('.feuille.no0', { y: '90vmin', duration: 1, rotation: 360, ease: 'none'})
.from('.sprite-animation', {x: '-90vw', ease: 'none'},'0.1')
.to('.feuille.no0',{ opacity: 0})
.to('.sprite-animation',{ opacity: 0,},'<')
.to('#ixy-feuille',{  opacity: 1, ease: 'none'},'<')

var element3 = document.getElementById('sprite1');
var options3 = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0 
};

var observer3 = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      element3.classList.add('active');
      document.getElementById('sprite2').classList.add('active');
      document.getElementById('sprite3').classList.add('active');
    }
  });
}, options3);
observer3.observe(element3);

/* --------------------------------------Animation Chapitre 3 --------------------------------------------*/

let animation;

gsap.timeline({ scrollTrigger: {
  pin:true,
  scrub: true,
  start: 'top top',
  end:"400% top" ,
  trigger: '#chapitre3',
  toggleActions: "restart complete reverse reset"
  }
})
/*.to('.ixy', {
  motionPath: {
    align: '#trajet',
    path: '#trajet',
    alignOrigin: [0.5, 0.5],
    xPercent: 50,
    xPercent: 50,
    autoRotate: false,
    start: 0,
    end: 1
  },

  repeat: 0,
})
*/
/* --------------------------------------Animation Chapitre 4 --------------------------------------------*/

gsap.timeline({ scrollTrigger: {
    pin:true,
    start: 'top top',
    end:"200% top" ,
    trigger: '#chapitre4',
    toggleActions: "restart complete reverse reset"
}})



/* --------------------------------------Animation Chapitre 5 --------------------------------------------*/
gsap.timeline({ scrollTrigger: {
  pin:false,
  scrub: false,
  start: 'top top',
  end:"400% top" ,
  trigger: '#chapitre5',
  toggleActions: "restart complete reverse reset"
  }
})
.to('#bgc2', { opacity: 0}, '=-')

const mp3 = document.getElementById('coffre');

let play = document.querySelector("#chapitre5");
play.addEventListener("click", function () {
  mp3.play();
});


/* --------------------------------------Animation Chapitre 6 --------------------------------------------*/

var element6 = document.getElementById('sprite3');
var options6 = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0 
};

var observer6 = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      element6.classList.add('active');

    }
  });
}, options6);
observer6.observe(element6);


gsap.timeline({ scrollTrigger: {
  pin:true,
  scrub: true,
  start: 'top top',
  end:"400% top" ,
  trigger: '#chapitre6',
  toggleActions: "restart complete reverse reset"
  }
})


//Si l'élément est visible démarre l'animation
var element2 = document.getElementById('feuille');
var options2 = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0 
};

var observer2 = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      animFeuille.play();
      //animVent.play();
    }
  });
}, options2);
observer2.observe(element2);
/*
let animVent = gsap.timeline()
  .paused(true)
    .from(".path", {ease: "none", drawSVG: "0% 0%", repeat: '-1', duration: 2
})
*/


let animFeuille = gsap.timeline()
  .paused(true)
    .to('.feuille.no1', { duration: 25, y: '52vmin', rotation: 400, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no2', { duration: 30, y: '70vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no3', { duration: 20, y: '65vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no4', { duration: 15, y: '48vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')
    .to('.feuille.no5', { duration: 15, y: '48vmin', rotation: 360, repeat: '-1', ease: 'none'}, '<')

    
/* --------------------------------------Animation Chapitre 7 --------------------------------------------*/

gsap.timeline({ scrollTrigger: {
  pin:true,
  scrub: 0.5,
  start: 'top top',
  end:"400% top" ,
  trigger: '#chapitre7',
  toggleActions: "restart complete reverse reset"
  }
})
.to("#chapitre7", { backgroundPosition: "0% 90%", ease: "none"})
.to(".nuage.no1", { bottom: '-50vh', ease: "none"}, '<')
.to('.nuage.no2', { bottom: '-30vh', ease: "none"}, '<')
//.from("#nuage", {morphSVG: "#fantome"}, '<');
