import { MutableRefObject, useEffect } from 'react';

const SCROLL_TIMEOUT = 6000;

type TUseAutoScroll = {
  leftSlideId: number;
  sliderSlidesRef: MutableRefObject<(HTMLElement | null)[]>;
};

/**
 * @description Logic that implements auto-scrolling slides
 */
export const useAutoScroll = (options: TUseAutoScroll) => {
  const { leftSlideId, sliderSlidesRef } = options;

  const scrollToNextSlide = ({
    nextSlideId,
    slidesRef,
  }: {
    nextSlideId: number;
    slidesRef: (HTMLElement | null)[];
  }) => {
    slidesRef[nextSlideId + 1]?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollTimeout = setTimeout(
      () =>
        scrollToNextSlide({
          nextSlideId: leftSlideId,
          slidesRef: sliderSlidesRef.current,
        }),
      SCROLL_TIMEOUT,
    );

    return () => {
      clearTimeout(scrollTimeout);
    };
  }, [leftSlideId, sliderSlidesRef]);
};
