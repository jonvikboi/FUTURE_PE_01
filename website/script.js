/* ============================================
   BLOOM & BREW CAFÉ — Interactive Scripts
   Scroll animations, navbar, and micro-interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- Mobile menu toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
      });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Scroll reveal animations ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Animated number counter for stats ---
  const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const startTime = performance.now();
    
    // Parse the target number (handle comma-separated numbers)
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
    const suffix = target.replace(/[0-9,]/g, '');
    
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * numericTarget);
      
      // Format with commas
      const formatted = current.toLocaleString('en-IN');
      element.textContent = formatted + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    
    requestAnimationFrame(update);
  };

  // Observe stat numbers
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const originalText = entry.target.textContent;
        animateCounter(entry.target, originalText);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statsObserver.observe(el));

  // --- Parallax effect on hero background ---
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
      }
    }, { passive: true });
  }

  // --- Service card tilt effect (subtle) ---
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -3;
      const rotateY = (x - centerX) / centerX * 3;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // --- Form interactions ---
  const reserveBtn = document.getElementById('reserve-submit-btn');
  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      const name = document.getElementById('reserve-name').value;
      const phone = document.getElementById('reserve-phone').value;
      
      if (name && phone) {
        reserveBtn.textContent = '✓ Reserved!';
        reserveBtn.style.background = '#4ade80';
        reserveBtn.style.pointerEvents = 'none';
        
        setTimeout(() => {
          reserveBtn.textContent = 'Reserve a Table';
          reserveBtn.style.background = '';
          reserveBtn.style.pointerEvents = '';
          document.getElementById('reserve-name').value = '';
          document.getElementById('reserve-phone').value = '';
        }, 3000);
      } else {
        reserveBtn.style.animation = 'shake 0.5s ease';
        setTimeout(() => reserveBtn.style.animation = '', 500);
      }
    });
  }

  const newsletterBtn = document.getElementById('newsletter-submit-btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', () => {
      const email = document.getElementById('newsletter-email').value;
      
      if (email && email.includes('@')) {
        newsletterBtn.textContent = '✓ Subscribed!';
        newsletterBtn.style.background = '#4ade80';
        newsletterBtn.style.pointerEvents = 'none';
        
        setTimeout(() => {
          newsletterBtn.textContent = 'Join the List';
          newsletterBtn.style.background = '';
          newsletterBtn.style.pointerEvents = '';
          document.getElementById('newsletter-email').value = '';
        }, 3000);
      } else {
        newsletterBtn.style.animation = 'shake 0.5s ease';
        setTimeout(() => newsletterBtn.style.animation = '', 500);
      }
    });
  }

  // --- Testimonial card hover glow ---
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200, 149, 108, 0.06), var(--color-bg-card) 60%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = 'var(--color-bg-card)';
    });
  });

  // --- Hero text staggered entrance ---
  const heroElements = document.querySelectorAll('.hero-badge, .hero h1, .hero-subtitle, .hero-desc, .hero-ctas, .hero-stats, .hero-visual');
  heroElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`;
    
    // Trigger after a tiny delay to allow paint
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });

  // --- Add shake animation dynamically ---
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-6px); }
      40% { transform: translateX(6px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);

  // --- Active nav link highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinksAll.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.style.color = 'var(--color-text)';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
});
