import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies scroll-triggered reveal animations using IntersectionObserver.
 * Adds the 'in-view' class when elements enter the viewport.
 * Supports staggered delays for child elements.
 */
export function useScrollReveal(rootMargin = '-60px') {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const revealTargets = container.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .stagger-child'
    );

    if (revealTargets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin }
    );

    revealTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootMargin]);

  return containerRef;
}

/**
 * Animated counter hook — counts up from 0 to target value when visible.
 */
export function useCountUp(endValue, duration = 2000, startOnView = true) {
  const ref = useRef(null);
  const countRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        countRef.current = Math.round(eased * endValue);
        
        if (el) {
          el.textContent = typeof endValue === 'number' && endValue % 1 !== 0 
            ? countRef.current.toFixed(1) 
            : countRef.current;
        }
        
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!startOnView) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [endValue, duration, startOnView]);

  return ref;
}

/**
 * Parallax scroll hook — moves element at different scroll speed.
 * speed: 0.5 = half speed (background), 1.5 = faster than scroll
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const scrolled = window.scrollY;
          const offset = (scrolled - el.offsetTop) * speed;
          el.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}
