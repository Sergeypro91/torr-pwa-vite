import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

import { useCarousel } from '@torr/shared';

export const useSlideTransition = () => {
  const { api } = useCarousel();
  const [slideTransition, setSlideTransition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState<null | number>(null);
  const [nextSlide, setNextSlide] = useState<null | number>(null);

  const logSlidesInView = useCallback(
    ({
      scrollProgress,
      scrollSnapList,
      slidesInView,
      selectedScrollSnap,
    }: EmblaCarouselType) => {
      const progress = -scrollProgress().toFixed(5) * -1;
      const coefficient = scrollSnapList()[1];
      const currentSlide = selectedScrollSnap();
      const nextSlide = slidesInView().filter(
        (item) => item !== currentSlide,
      )[0];
      const itemsCount = scrollSnapList().length;

      const calcPercent = (item: number) =>
        ((progress - coefficient * item) / coefficient) * 100;

      if (currentSlide === 0 && nextSlide === itemsCount - 1) {
        setSlideTransition(calcPercent(nextSlide) - 100);
      } else {
        setSlideTransition(calcPercent(currentSlide));
      }

      setCurrentSlide(currentSlide);
      setNextSlide(nextSlide);
    },
    [],
  );

  useEffect(() => {
    api?.on('scroll', logSlidesInView);
  }, [api, logSlidesInView]);

  return { slideTransition, currentSlide, nextSlide };
};
