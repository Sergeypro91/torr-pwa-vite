import { MutableRefObject } from 'react';

import { LEFT_START_VAR_PROP, POSTER_WIDTH_VAR_PROP } from '../../constants.ts';

type TResetSlideStyle = {
  sliderRef: MutableRefObject<HTMLElement | null>;
  exceptionSlideIds: number[];
  cleanableSlidesIds: number[];
};

export const resetSlidesStyle = ({
  sliderRef,
  exceptionSlideIds,
  cleanableSlidesIds,
}: TResetSlideStyle) => {
  // clearing inactive slides elements style, and potential stuck start position at left slide
  const sliderSlidesElements = Array.from(sliderRef.current?.children ?? []);
  const slidesWithoutRight = sliderSlidesElements.filter(
    (_, slideId) => !cleanableSlidesIds.includes(slideId),
  );

  slidesWithoutRight.forEach((slide, slideId) => {
    if (slide) {
      if (!exceptionSlideIds.includes(slideId)) {
        (slide as HTMLElement).style.removeProperty(POSTER_WIDTH_VAR_PROP);
      }

      (slide as HTMLElement).style.removeProperty(LEFT_START_VAR_PROP);
    }
  });
};
