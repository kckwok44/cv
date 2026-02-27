/**
 * @param {string} selector - CSS selector
 * @param {Document | Element} [context=document] - Context to search within
 * @returns {Element | null}
 */
export const $ = (selector, context = document) => context.querySelector(selector);

/**
 * @param {string} selector - CSS selector
 * @param {Document | Element} [context=document] - Context to search within
 * @returns {Element[]}
 */
export const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

/**
 * @param {Function} fn - Function to throttle
 * @param {number} wait - Minimum time between executions in milliseconds
 * @returns {Function}
 */
export const throttle = (fn, wait) => {
  let lastTime = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn(...args);
    }
  };
};

/**
 * @param {IntersectionObserverCallback} callback - Callback function
 * @param {IntersectionObserverInit} [options={}] - Observer options
 * @returns {IntersectionObserver}
 */
export const createObserver = (callback, options = {}) => {
  const defaultOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

/**
 * @param {HTMLElement} element - Element to update
 * @param {number} target - Target number
 * @param {number} [duration=2000] - Animation duration in milliseconds
 * @param {string} [suffix=''] - Suffix to append to number
 * @returns {void}
 */
export const animateNumber = (element, target, duration = 2000, suffix = '') => {
  const startTime = performance.now();
  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * easeOut);
    element.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else element.textContent = target + suffix;
  };
  requestAnimationFrame(update);
};

/**
 * @param {string | Element} target - Target selector or element
 * @param {number} [offset=0] - Offset from top in pixels
 * @returns {void}
 */
export const scrollTo = (target, offset = 0) => {
  const element = typeof target === 'string' ? $(target) : target;
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

/**
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function}
 */
export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
