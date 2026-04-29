/* ============================================================
   FOUR PEAKS MEDICAL — Global JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav link ──────────────────────────────────────
  const navLinks = document.querySelectorAll('#site-nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Hamburger / mobile nav ───────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('site-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      nav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on nav link click (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });
  }

  // ── Accordion (FAQ) ─────────────────────────────────────
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const body = document.getElementById(trigger.getAttribute('aria-controls'));

      // Collapse all others
      triggers.forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        const b = document.getElementById(t.getAttribute('aria-controls'));
        if (b) b.classList.remove('open');
      });

      // Toggle clicked
      if (!expanded) {
        trigger.setAttribute('aria-expanded', 'true');
        if (body) body.classList.add('open');
      }
    });
  });

  // ── Fade-up on scroll ────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger children if multiple visible at once
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 80 * (entry.target.dataset.delay || 0));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach((el, i) => {
      if (!el.dataset.delay) el.dataset.delay = i % 4;
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // ── Phone number formatting helper ───────────────────────
  // Wraps tel: links for tracking-ready markup
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.setAttribute('data-track', 'phone-click');
  });

});
