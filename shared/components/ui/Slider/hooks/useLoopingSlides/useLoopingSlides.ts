import { MutableRefObject } from 'react';

import { togglingSnap } from '../../utils';

/**
 * @description Logic for looping slides
 * @param sliderRef - Slider ref object.
 */
export const useLoopingSlides = (
  sliderRef: MutableRefObject<HTMLElement | null>,
) => {
  const loopingSlides = () => {
    const sliderElem = sliderRef.current;
    const sliderSlidesElem = sliderElem?.children ?? [];

    if (sliderElem) {
      const { width } = sliderElem.getBoundingClientRect();
      const leftPosition = sliderElem.scrollLeft;
      const firstSlideStart = width;
      const lastSlideStart = width * (sliderSlidesElem.length - 2);
      const lastSlideEnd = Math.round(width * (sliderSlidesElem.length - 1));

      if (leftPosition <= 0) {
        togglingSnap({ elem: sliderElem, leftPosition: lastSlideStart });
      }

      if (leftPosition >= lastSlideEnd) {
        togglingSnap({ elem: sliderElem, leftPosition: firstSlideStart });
      }
    }
  };

  return { loopingSlides };
};
