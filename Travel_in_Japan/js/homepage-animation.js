const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
timeline
  .from('.header', { y: '-100%', ease: 'ease' })
  .from('.nav-link', { opacity: 0, stagger: 0.5, ease: 'ease' }, '<0.5')
  .from('.destination-1', { y: '100%', opacity: 0, stagger: 1, ease: 'ease' }, '<0.5')
  .from('.destination-2', { y: '100%', opacity: 0, stagger: 1, ease: 'ease' }, '<0.5')
  .from('.destination-3', { y: '100%', opacity: 0, stagger: 1, ease: 'ease' }, '<0.5')
  .from('.destination-4', { y: '100%', opacity: 0, stagger: 1, ease: 'ease' }, '<0.5');