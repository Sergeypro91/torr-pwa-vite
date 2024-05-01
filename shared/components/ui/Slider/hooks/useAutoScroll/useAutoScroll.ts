import { MutableRefObject, useEffect } from 'react';

import { useStore } from '../../useStore';
import { navigateToSlide } from '../../utils';
import { SCROLL_TO_NEXT_SLIDE_TIMEOUT } from '../../constants.ts';

/**
 * @description Logic that implements auto-scrolling slides
 * @param sliderRef - Slider ref object.
 * @
 */
export const useAutoScroll = (
  sliderRef: MutableRefObject<HTMLElement | null>,
) => {
  const isScrolling = useStore((state) => state.isScrolling);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      const sliderElem = sliderRef.current;

      if (!isScrolling && sliderElem) {
        const { width } = sliderElem.getBoundingClientRect();
        const leftPosition = sliderElem.scrollLeft;
        const leftSlideId = Math.round(leftPosition / width);

        navigateToSlide({
          slideId: leftSlideId + 1,
          sliderRef,
        });
      }
    }, SCROLL_TO_NEXT_SLIDE_TIMEOUT);

    return () => {
      clearTimeout(scrollTimeout);
    };
  }, [sliderRef, isScrolling]);

  return { timeoutToNext: SCROLL_TO_NEXT_SLIDE_TIMEOUT };
};
