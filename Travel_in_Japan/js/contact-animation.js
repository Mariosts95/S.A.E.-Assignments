const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
timeline
  .from('.header', { y: '-100%', ease: 'ease' })
  .from('.nav-link', { opacity: 0, stagger: 0.5, ease: 'ease' }, '<0.5');

 gsap.from('.contact-form-image', {
   scrollTrigger: {
     trigger: '.contact-form-image',
     start: 'top bottom',
     toggleActions: 'play none none reset',
   },
   x: -100,
   duration: 1,
   opacity: 0,
   ease: 'ease',
 });

 gsap.from('.contact-form-info', {
   scrollTrigger: {
     trigger: '.contact-form-info',
     start: 'top bottom',
     toggleActions: 'play none none reset',
   },
   x: 100,
   duration: 1,
   opacity: 0,
   ease: 'ease',
 });

 gsap.from('.newsletter', {
   scrollTrigger: {
     trigger: '.newsletter',
     start: 'top bottom',
     toggleActions: 'play none none reset',
   },
   y: 100,
   duration: 1,
   opacity: 0,
   ease: 'ease',
 });

 gsap.from('.image-gallery', {
   scrollTrigger: {
     trigger: '.image-gallery',
     start: 'center bottom',
     toggleActions: 'play none none reset',
   },
   scale: (0.5),
   duration: 1,
   opacity: 0,
   ease: 'ease',
 });