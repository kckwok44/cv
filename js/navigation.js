import { $, $$, throttle, scrollTo } from './utils.js';

/**
 * Creates a navigation controller for scroll behavior and active links
 * @returns {Object} Empty object (auto-initializes)
 */
const NavigationController = () => {
  const navbar = $('#navbar');
  let lastScroll = 0;
  const scrollThreshold = 100;

  const handleScroll = () => {
    const onScroll = throttle(() => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > scrollThreshold) {
        navbar.classList.add('glass-strong');
        navbar.classList.remove('glass');
      } else {
        navbar.classList.add('glass');
        navbar.classList.remove('glass-strong');
      }
      lastScroll = currentScroll;
    }, 100);
    window.addEventListener('scroll', onScroll, { passive: true });
  };

  /**
   * Initializes smooth scrolling for anchor links.
   */
  const initSmoothScroll = () => {
    document.body.addEventListener('click', e => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      e.preventDefault();
      scrollTo(link.getAttribute('href'), 80);
    });
  };

  const initActiveLinks = () => {
    const sections = $$('section[id]');
    const navLinks = $$('.nav-link');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  };

  const init = () => {
    handleScroll();
    initSmoothScroll();
    initActiveLinks();
  };

  init();

  return {};
};

export default NavigationController;
