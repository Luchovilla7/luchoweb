// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.preloader').classList.add('hidden');
    }, 500);
  });
  
  // Scroll reveal animations
  function revealElements() {
    const reveals = document.querySelectorAll('.reveal-text, .reveal-card');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  // Initialize animations
  document.addEventListener('DOMContentLoaded', function() {
    // Trigger reveal animations
    revealElements();
  });
  
  // Add hover effects to link cards
  const linkCards = document.querySelectorAll('.link-card');
  
  linkCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.link-icon').style.transform = 'scale(1.1)';
      card.querySelector('.link-arrow').style.transform = 'translateX(5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.link-icon').style.transform = 'scale(1)';
      card.querySelector('.link-arrow').style.transform = 'translateX(0)';
    });
  });
  
  // Add subtle animation to profile image
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.addEventListener('mouseenter', () => {
      profileImage.querySelector('.circle-bg').style.filter = 'blur(15px)';
      profileImage.querySelector('.circle-bg').style.opacity = '0.5';
    });
    
    profileImage.addEventListener('mouseleave', () => {
      profileImage.querySelector('.circle-bg').style.filter = 'blur(20px)';
      profileImage.querySelector('.circle-bg').style.opacity = '0.3';
    });
  }
  
  // Ensure all animations are triggered on page load
  window.addEventListener('load', revealElements);