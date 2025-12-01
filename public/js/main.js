// Initialize AOS
AOS.init();

// Initialize Lax.js
window.onload = function() {
  lax.init();
  lax.addDriver('scrollY', function() {
    return window.scrollY;
  });
  lax.addElements('.lax', {
    scrollY: {
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        [1, 1.1, 1],
      ],
      rotate: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 5, 0],
      ],
    },
  });
};

// Particles.js with cursor interactivity
particlesJS('particles-js', {
  particles: {
    number: { value: 0, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true },
    move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' }
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
}, function() {
  console.log('particles.js initialized'); // Debug log
});

// Counter-Up Animation
const counters = document.querySelectorAll('.counter');
const speed = 500;
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const updateCount = () => {
        const target = +entry.target.getAttribute('data-target');
        const count = +entry.target.innerText;
        const inc = target / speed;
        if (count < target) {
          entry.target.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 10);
        } else {
          entry.target.innerText = target;
        }
      };
      updateCount();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(counter => observer.observe(counter));

// Smooth Scrolling, Active Link Highlighting, and Dynamic Hero Text
document.addEventListener('DOMContentLoaded', () => {
  // Dynamic hero text for mobile
  const typedText = document.querySelector('.typed-text');
  if (window.innerWidth <= 768) {
    typedText.textContent = 'Real Impact.';
    typedText.style.animation = 'typing 1s steps(12, end), blink 0.75s step-end infinite';
  }

  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });

  // Highlight active section on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100; // Offset for navbar height
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});

// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    menu.classList.remove('open');
    menu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.remove('hidden');
    menu.classList.add('open');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
  }
}

// Sticky Navbar with Shadow
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('header-scrolled');
  } else {
    navbar.classList.remove('header-scrolled');
  }
});

// Form Submission
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill out all fields.');
  }
}