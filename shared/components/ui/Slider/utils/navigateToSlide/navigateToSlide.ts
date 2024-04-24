import { MutableRefObject } from 'react';

import { SNAP_STYLE_NAME } from '../../constants.ts';
import { requestAnimationFrameScheduler } from '../../utils';

type TNavigateToChildId = {
  slideId: number;
  sliderRef: MutableRefObject<HTMLElement | null>;
  duration?: number;
};

export const navigateToSlide = ({
  slideId,
  duration,
  sliderRef,
}: TNavigateToChildId) => {
  const sliderElem = sliderRef.current;
  const sliderSlideElem = sliderElem?.children[slideId];

  if (sliderElem && sliderSlideElem) {
    const sliderSlideRect = sliderSlideElem.getBoundingClientRect();
    const startScrollLeft = sliderElem.scrollLeft;
    const xShift = sliderSlideRect.width * slideId;

    sliderElem.style.scrollSnapType = 'none';

    const job = (progress: number) => {
      sliderElem.scrollLeft =
        startScrollLeft + (xShift - startScrollLeft) * progress;
    };

    const afterJob = () => {
      setTimeout(() => {
        sliderElem.style.removeProperty(SNAP_STYLE_NAME);
      });
    };

    requestAnimationFrameScheduler(job)(duration)(afterJob);
  }
};
