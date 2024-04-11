import { useState } from 'react';

/**
 * @description Logic for looping slides
 */
export const useScrollMonitoring = () => {
  const [scrollTicking, setScrollTicking] = useState(false);

  const scrollMonitoring = (sliderElem: EventTarget & HTMLElement) => {
    if (!scrollTicking) {
      sliderElem.style.scrollSnapType = '';

      window.requestAnimationFrame(() => {
        const { width } = sliderElem.getBoundingClientRect();
        const currentScrollPosition = sliderElem.scrollLeft;
        const sliderChildren = Array.from(sliderElem.children);
        const lastSlideElemId = sliderChildren.length - 1;

        if (currentScrollPosition <= 0) {
          sliderElem.style.scrollSnapType = 'none';

          sliderChildren[lastSlideElemId - 1].scrollIntoView({
            behavior: 'instant',
          });
        }

        if (currentScrollPosition >= width * lastSlideElemId) {
          sliderElem.style.scrollSnapType = 'none';

          sliderChildren[1].scrollIntoView({
            behavior: 'instant',
          });
        }

        setScrollTicking(false);
      });

      setScrollTicking(true);
    }
  };

  return { scrollMonitoring };
};
