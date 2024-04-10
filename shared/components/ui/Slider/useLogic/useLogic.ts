import { PointerEvent, useEffect, useRef, useState } from 'react';

import { TSlider } from '../Slider.tsx';
import { scrollMonitoring, transitionMonitoring } from '../utils';

export const useLogic = <TSlide>(props: TSlider<TSlide>) => {
  const { slides } = props;
  const [scrollTicking, setScrollTicking] = useState(false);
  const [transitionTicking, setTransitionTicking] = useState(false);
  const [startLeftPosition, setStartLeftPosition] = useState(0);
  const [currLeftPosition, setCurrLeftPosition] = useState(0);
  const [appearingSlideId, setAppearingSlideId] = useState<number>(1);
  const [disappearingSlideId, setDisappearingSlideId] = useState<number>(2);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderSlidesRef = useRef<(HTMLElement | null)[]>([]);
  const extendedSlides = slides
    .toSpliced(0, 0, slides[slides.length - 1])
    .toSpliced(-1, 1, slides[slides.length - 1], slides[0]);

  const handleScroll = (event: PointerEvent<HTMLElement>) => {
    const sliderElem = event.currentTarget;

    if (sliderElem) {
      const leftPosition = sliderElem.scrollLeft;
      const { width } = sliderElem.getBoundingClientRect();

      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          sliderElem.style.scrollSnapType = '';

          scrollMonitoring({
            sliderElem,
            setScrollTicking,
          });
        });

        setScrollTicking(true);
      }

      if (!transitionTicking) {
        window.requestAnimationFrame(() => {
          transitionMonitoring({
            sliderElem,
            currLeftPosition,
            startLeftPosition,
            sliderSlidesRef,
            setAppearingSlideId,
            setDisappearingSlideId,
            setTransitionTicking,
          });
        });

        setTransitionTicking(true);
      }

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
