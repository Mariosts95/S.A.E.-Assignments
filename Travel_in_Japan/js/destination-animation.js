const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
timeline
  .from('.header', { y: '-100%', ease: 'ease' })
  .from('.nav-link', { opacity: 0, stagger: 0.5, ease: 'ease' }, '<0.5')
  .from('.gallery', { opacity: 0, ease: 'ease' }, 0.3);

gsap.from('.preview', {
    scrollTrigger:{
      trigger: '.preview',
      start: 'top bottom',
      toggleActions: "play none none reset"
    }, 
    y: 200,
    duration: 1,
    opacity: 0,
    ease: 'ease',
});

gsap.from('.tokyo-temperature-array-el', {
  scrollTrigger: {
    trigger: '.tokyo-temperature-array-el',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -200,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.tokyo-temperature-image', {
  scrollTrigger: {
    trigger: '.tokyo-temperature-image',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 200,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});