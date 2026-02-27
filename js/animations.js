import { $$, createObserver, animateNumber } from './utils.js';

/**
 * @typedef {Object} AnimationControllerAPI
 * @property {() => void} animateHeroCounters - Animate hero section counters
 * @property {() => void} destroy - Clean up observers
 */

/**
 * Creates an animation controller for reveal and counter animations
 * @returns {AnimationControllerAPI}
 */
const AnimationController = () => {
  const observers = new Map();

  const initRevealAnimations = () => {
    const revealCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observers.get('reveal').unobserve(entry.target);
        }
      });
    };
    const observer = createObserver(revealCallback);
    observers.set('reveal', observer);
    $$('.reveal').forEach(el => observer.observe(el));
  };

  const initCounterAnimations = () => {
    const counterCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.counter').forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const suffix = counter.dataset.suffix || '';
            animateNumber(counter, target, 2000, suffix);
          });
          observers.get('counter').unobserve(entry.target);
        }
      });
    };
    const observer = createObserver(counterCallback, { threshold: 0.5 });
    observers.set('counter', observer);
    $$('.reveal').forEach(el => {
      if (el.querySelector('.counter')) observer.observe(el);
    });
  };

  const init = () => {
    initRevealAnimations();
    initCounterAnimations();
  };

  const animateHeroCounters = () => {
    $$('.hero .counter').forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const suffix = counter.dataset.suffix || '+';
      animateNumber(counter, target, 2000, suffix);
    });
  };

  const destroy = () => {
    observers.forEach(observer => observer.disconnect());
    observers.clear();
  };

  init();

  return {
    animateHeroCounters,
    destroy
  };
};

export default AnimationController;
