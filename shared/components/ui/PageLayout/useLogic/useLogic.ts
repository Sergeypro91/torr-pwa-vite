import { useEffect, useState } from 'react';

const START_VALUE = 100;
const PARALLAX_COEFFICIENT = 8;

export const useLogic = () => {
  const [scrollCoefficient, setScrollCoefficient] = useState(START_VALUE);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;

        return;
      }

      if (START_VALUE > scrollY / PARALLAX_COEFFICIENT) {
        setScrollCoefficient(START_VALUE - scrollY / PARALLAX_COEFFICIENT);
      } else {
        setScrollCoefficient(0);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollCoefficient]);

  return { scrollCoefficient, setScrollCoefficient };
};
