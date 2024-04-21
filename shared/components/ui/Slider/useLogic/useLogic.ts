import { useEffect, useRef } from 'react';
import { debounce } from 'lodash-es';

import { TSlider } from '@torr/shared';

import { useStore } from '../useStore';
import { navigateToSlide } from '../utils';
import { IS_SCROLL_DEBOUNCE } from '../constants.ts';
import { useAutoScroll, useLoopingSlides, useSlideTransition } from '../hooks';

export const useLogic = <
  TSlide extends Record<string, unknown> = Record<string, unknown>,
>(
  props: TSlider<TSlide>,
) => {
  const { slides } = props;
  const sliderRef = useRef<HTMLElement | null>(null);
  const setIsScrolling = useStore((state) => state.setIsScrolling);

  const { loopingSlides } = useLoopingSlides(sliderRef);

  const { slideTransition } = useSlideTransition(sliderRef);

  useAutoScroll(sliderRef);

  const extendedSlides = slides
    .toSpliced(0, 0, slides[slides.length - 1])
    .toSpliced(-1, 1, slides[slides.length - 1], slides[0]);

  const scrollStopDebounce = useRef(
    debounce((scrollState: boolean) => {
      setIsScrolling(scrollState);
    }, IS_SCROLL_DEBOUNCE),
  ).current;

  const handleScroll = () => {
    loopingSlides();
    slideTransition(scrollStopDebounce);
    setIsScrolling(true);
  };

  useEffect(() => {
    navigateToSlide({ slideId: 1, duration: 0, sliderRef });
  }, [sliderRef]);

  return {
    sliderRef,
    extendedSlides,
    handleScroll,
  };
};
