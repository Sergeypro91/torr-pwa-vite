import { PointerEvent, useEffect, useRef } from 'react';

import { TSlider } from '../Slider.tsx';
import { useScrollMonitoring, useTransitionMonitoring } from '../hooks';

export const useLogic = <TSlide>(props: TSlider<TSlide>) => {
  const { slides } = props;
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderSlidesRef = useRef<(HTMLElement | null)[]>([]);
  const extendedSlides = slides
    .toSpliced(0, 0, slides[slides.length - 1])
    .toSpliced(-1, 1, slides[slides.length - 1], slides[0]);

  const { scrollMonitoring } = useScrollMonitoring();

  const { leftSlideId, transitionMonitoring } = useTransitionMonitoring({
    sliderSlidesRef,
  });

  const handleScroll = (event: PointerEvent<HTMLElement>) => {
    const sliderElem = event.currentTarget;

    if (sliderElem) {
      scrollMonitoring(sliderElem);
      transitionMonitoring(sliderElem);
    }
  };

  useEffect(() => {
    const sliderElem = sliderRef.current;

    if (sliderElem) {
      sliderElem.children[leftSlideId].scrollIntoView();
    }
  }, []);

  return {
    sliderRef,
    extendedSlides,
    sliderSlidesRef,
    handleScroll,
  };
};
