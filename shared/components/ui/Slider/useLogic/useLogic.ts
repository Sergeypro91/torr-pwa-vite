import { PointerEvent, useEffect, useRef, useState } from 'react';

import { TSlider } from '../Slider.tsx';
import { useScrollMonitoring, useTransitionMonitoring } from '../hooks';

export const useLogic = <TSlide>(props: TSlider<TSlide>) => {
  const { slides } = props;
  const [startLeftPosition, setStartLeftPosition] = useState(0);
  const [currLeftPosition, setCurrLeftPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderSlidesRef = useRef<(HTMLElement | null)[]>([]);
  const extendedSlides = slides
    .toSpliced(0, 0, slides[slides.length - 1])
    .toSpliced(-1, 1, slides[slides.length - 1], slides[0]);

  const { scrollMonitoring } = useScrollMonitoring();

  const { appearingSlideId, disappearingSlideId, transitionMonitoring } =
    useTransitionMonitoring({
      startLeftPosition,
      currLeftPosition,
      sliderSlidesRef,
    });

  const handleScroll = (event: PointerEvent<HTMLElement>) => {
    const sliderElem = event.currentTarget;

    if (sliderElem) {
      const leftPosition = sliderElem.scrollLeft;
      const { width } = sliderElem.getBoundingClientRect();

      scrollMonitoring(sliderElem);
      transitionMonitoring(sliderElem);
      setCurrLeftPosition(leftPosition);
      setStartLeftPosition(Math.round(leftPosition / width) * width);
    }
  };

  useEffect(() => {
    const sliderElem = sliderRef.current;

    if (sliderElem) {
      const { width } = sliderElem.getBoundingClientRect();

      sliderElem.children[1].scrollIntoView();
      setStartLeftPosition(Math.round(sliderElem.scrollLeft / width) * width);
      setCurrLeftPosition(sliderElem.scrollLeft);
    }
  }, [sliderRef]);

  return {
    sliderRef,
    extendedSlides,
    sliderSlidesRef,
    currLeftPosition,
    appearingSlideId,
    disappearingSlideId,
    handleScroll,
  };
};
