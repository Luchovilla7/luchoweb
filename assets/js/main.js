// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.preloader').classList.add('hidden');
  }, 500);
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Active link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').substring(1) === current) {
      item.classList.add('active');
    }
  });
});

// Scroll reveal animations
function revealElements() {
  const reveals = document.querySelectorAll('.reveal-text, .reveal-image, .reveal-card');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show a success message
    
    // Clear form
    contactForm.reset();
    
    // Show success message (you can customize this)
    alert(`¡Gracias ${name}! Tu mensaje ha sido enviado correctamente. Te contactaré pronto.`);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const heroSection = document.querySelector('.hero');
  
  if (heroSection && scrollPosition < heroSection.offsetHeight) {
    const parallaxElements = document.querySelectorAll('.hero-text, .hero-image');
    
    parallaxElements.forEach(element => {
      const speed = element.classList.contains('hero-text') ? 0.3 : 0.2;
      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  }
});

// Add animation to service cards on hover
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.service-icon').style.transform = 'scale(1.1)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.querySelector('.service-icon').style.transform = 'scale(1)';
  });
});

// Portfolio hover effects
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.portfolio-overlay').style.opacity = '1';
    item.querySelector('.portfolio-info').style.transform = 'translateY(0)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.querySelector('.portfolio-overlay').style.opacity = '0';
    item.querySelector('.portfolio-info').style.transform = 'translateY(20px)';
  });
});

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', function() {
  // Trigger reveal animations
  revealElements();
  
  // Ensure portfolio overlays are properly initialized
  portfolioItems.forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay');
    const info = item.querySelector('.portfolio-info');
    if (overlay) overlay.style.opacity = '0';
    if (info) info.style.transform = 'translateY(20px)';
  });
});