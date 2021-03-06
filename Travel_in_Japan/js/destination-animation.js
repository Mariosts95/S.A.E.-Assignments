const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
timeline
  .from('.header', { y: '-100%', ease: 'ease' })
  .from('.nav-link', { opacity: 0, stagger: 0.5, ease: 'ease' }, '<0.5')
  .from('.gallery', { y: -100,opacity: 0, ease: 'ease' }, 0.3);

gsap.from('.preview', {
    scrollTrigger:{
      trigger: '.preview',
      start: 'top bottom',
      toggleActions: "play none none reset"
    }, 
    y: 100,
    duration: 1,
    opacity: 0,
    ease: 'ease',
});

gsap.from('.destination-temperature-array-el', {
  scrollTrigger: {
    trigger: '.destination-temperature-array-el',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.destination-temperature-image', {
  scrollTrigger: {
    trigger: '.destination-temperature-image',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.getting-to', {
  scrollTrigger: {
    trigger: '.getting-to',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  y: 50,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.transportation', {
  scrollTrigger: {
    trigger: '.transportation',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  y: 50,
  stagger: 0.4,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.around', {
  scrollTrigger: {
    trigger: '.around',
    start: 'top center',
    toggleActions: 'play none none reset',
  },
  y: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.getting-around-destination-video', {
  scrollTrigger: {
    trigger: '.getting-around-destination-video',
    start: 'top center',
    toggleActions: 'play none none reset',
  },
  scale:(0.5),
  duration: 1,
  opacity: 0,
  ease: 'back',
});

gsap.from('.left-anim', {
  scrollTrigger: {
    trigger: '.left-anim',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.right-anim', {
  scrollTrigger: {
    trigger: '.right-anim',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.bot-anim', {
  scrollTrigger: {
    trigger: '.right-anim',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  y: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});