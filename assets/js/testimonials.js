document.addEventListener('DOMContentLoaded', () => {
  // Testimonials slider functionality
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.prev-testimonial');
  const nextButton = document.querySelector('.next-testimonial');
  
  let currentIndex = 0;
  let autoplayInterval;
  
  // Show testimonial by index
  const showTestimonial = (index) => {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    // Deactivate all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show the selected testimonial and activate corresponding dot
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Update current index
    currentIndex = index;
  };
  
  // Navigate to previous testimonial
  const prevTestimonial = () => {
    let index = currentIndex - 1;
    if (index < 0) {
      index = testimonials.length - 1;
    }
    showTestimonial(index);
  };
  
  // Navigate to next testimonial
  const nextTestimonial = () => {
    let index = currentIndex + 1;
    if (index >= testimonials.length) {
      index = 0;
    }
    showTestimonial(index);
  };
  
  // Setup event listeners
  prevButton.addEventListener('click', () => {
    prevTestimonial();
    resetAutoplay();
  });
  
  nextButton.addEventListener('click', () => {
    nextTestimonial();
    resetAutoplay();
  });
  
  // Set up dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonial(index);
      resetAutoplay();
    });
  });
  
  // Autoplay functionality
  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
  };
  
  // Reset autoplay timer
  const resetAutoplay = () => {
    clearInterval(autoplayInterval);
    startAutoplay();
  };
  
  // Initialize autoplay
  startAutoplay();
  
  // Touch swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  const testimonialsContainer = document.querySelector('.testimonial-container');
  
  testimonialsContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  testimonialsContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  const handleSwipe = () => {
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left, show next
      nextTestimonial();
      resetAutoplay();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right, show previous
      prevTestimonial();
      resetAutoplay();
    }
  };
});