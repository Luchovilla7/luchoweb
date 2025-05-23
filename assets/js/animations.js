document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Add staggered delay to certain sections
  const addStaggeredDelay = (selector, baseDelay = 100) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      element.style.transitionDelay = `${baseDelay * index}ms`;
    });
  };

  // Add staggered delays to various sections
  addStaggeredDelay('.benefits-grid .benefit-card');
  addStaggeredDelay('.modules .module');
  addStaggeredDelay('.extras-grid .extra-item');
  addStaggeredDelay('.offer-features .feature-item');
  addStaggeredDelay('.faq-container .faq-item');

  // Trigger animations for elements above the fold
  setTimeout(() => {
    const aboveFoldElements = document.querySelectorAll('.hero .animate-on-scroll');
    aboveFoldElements.forEach(element => {
      element.classList.add('visible');
    });
  }, 100);
});