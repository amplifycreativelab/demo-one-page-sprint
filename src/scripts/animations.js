/**
 * Scroll Animation System
 * Uses Intersection Observer for performant scroll-triggered animations
 */

// Animation Observer Configuration
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// Create Intersection Observer
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Optional: Unobserve after animation for performance
      // animationObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize animations on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.animate-fade-up, .animate-scale-in, .animate-slide-left, .animate-slide-right'
  );
  
  animatedElements.forEach(el => {
    animationObserver.observe(el);
  });

  // Initialize count-up animations for stats
  initCountUpAnimations();
});

/**
 * Count-up animation for statistics
 */
function initCountUpAnimations() {
  const statElements = document.querySelectorAll('[data-count]');
  
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const endValue = parseFloat(target.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        function animateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = endValue * easeOutQuart;
          
          // Format the number
          if (endValue % 1 !== 0) {
            target.textContent = currentValue.toFixed(1);
          } else {
            target.textContent = Math.floor(currentValue);
          }
          
          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            target.textContent = endValue;
          }
        }
        
        requestAnimationFrame(animateCount);
        countObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  statElements.forEach(el => {
    countObserver.observe(el);
  });
}

/**
 * 3D Tilt Effect for Cards
 * Adds a subtle 3D rotation on mouse move
 */
function initTiltEffect() {
  const tiltElements = document.querySelectorAll('[data-tilt]');
  
  tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20; // Max 10 degrees
      const rotateY = (centerX - x) / 20;  // Max 10 degrees
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// Initialize tilt effect
document.addEventListener('DOMContentLoaded', initTiltEffect);

/**
 * Magnetic Button Effect
 * Buttons that follow the cursor slightly
 */
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll('.btn-magnetic');
  
  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0) scale(1)';
    });
  });
}

// Initialize magnetic buttons
document.addEventListener('DOMContentLoaded', initMagneticButtons);

/**
 * Smooth scroll for anchor links
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

/**
 * Parallax effect for floating elements
 */
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax'));
      element.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}

// Initialize parallax
document.addEventListener('DOMContentLoaded', initParallax);

// Export for use in other modules
export { animationObserver, initTiltEffect, initMagneticButtons };
