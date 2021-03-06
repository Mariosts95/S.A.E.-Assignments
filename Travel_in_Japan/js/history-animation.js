const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
timeline
  .from('.header', { y: '-100%', ease: 'ease' })
  .from('.nav-link', { opacity: 0, stagger: 0.5, ease: 'ease' }, '<0.5')
  .from('.history-video', { scale: 0, duration: 1.5, opacity: 0, ease: 'ease' }, 0.3);

gsap.from('.asuka-period', {
  scrollTrigger: {
    trigger: '.asuka-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.nara-period', {
  scrollTrigger: {
    trigger: '.nara-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.heian-period', {
  scrollTrigger: {
    trigger: '.heian-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.kamakura-period', {
  scrollTrigger: {
    trigger: '.kamakura-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.muromachi-period', {
  scrollTrigger: {
    trigger: '.muromachi-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.azuchi-momoyama-period', {
  scrollTrigger: {
    trigger: '.azuchi-momoyama-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.edo-period', {
  scrollTrigger: {
    trigger: '.edo-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.meiji-period', {
  scrollTrigger: {
    trigger: '.meiji-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.taisho-period', {
  scrollTrigger: {
    trigger: '.taisho-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.showa-period', {
  scrollTrigger: {
    trigger: '.showa-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.heisei-period', {
  scrollTrigger: {
    trigger: '.heisei-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: 100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});

gsap.from('.reiwa-period', {
  scrollTrigger: {
    trigger: '.reiwa-period',
    start: 'top bottom',
    toggleActions: 'play none none reset',
  },
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'ease',
});
