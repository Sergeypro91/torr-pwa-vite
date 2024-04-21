import { MutableRefObject, useEffect, useState } from 'react';
import { DebouncedFunc } from 'lodash-es';

import { useStore } from '../../useStore';
import { handleTransitionBetweenSlides, resetSlidesStyle } from '../../utils';

/**
 * @description Logic that implements animating styles to transition between slides
 * @param sliderRef - Slider ref object.
 */
export const useSlideTransition = (
  sliderRef: MutableRefObject<HTMLElement | null>,
) => {
  const leftSlideId = useStore((state) => state.leftSlideId);
  const rightSlideId = useStore((state) => state.rightSlideId);
  const setLeftSlideId = useStore((state) => state.setLeftSlideId);
  const setRightSlideId = useStore((state) => state.setRightSlideId);
  const setBiggestSlideId = useStore((state) => state.setBiggestSlideId);
  const [transitionTicking, setTransitionTicking] = useState(false);

  const slideTransition = (
    scrollStopDebounce: DebouncedFunc<(scrollState: boolean) => void>,
  ) => {
    const sliderElem = sliderRef.current;

    if (!transitionTicking && sliderElem) {
      window.requestAnimationFrame(() => {
        handleTransitionBetweenSlides({
          sliderElem,
          setLeftSlideId,
          setRightSlideId,
          setBiggestSlideId,
        });

        setTransitionTicking(false);
      });

      scrollStopDebounce(false);
      setTransitionTicking(true);
    }
  };

  useEffect(() => {
    resetSlidesStyle({
      sliderRef,
      exceptionSlideIds: [leftSlideId],
      cleanableSlidesIds: [rightSlideId],
    });

    setLeftSlideId(leftSlideId);
  }, [leftSlideId, rightSlideId, setLeftSlideId, sliderRef]);

  return { leftSlideId, slideTransition };
};
