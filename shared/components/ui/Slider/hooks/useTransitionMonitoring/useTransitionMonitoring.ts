import { MutableRefObject, useEffect, useState } from 'react';

import { LEFT_START_VAR_PROP, POSTER_WIDTH_VAR_PROP } from './constants.ts';
import { definePrevSlide, resetSlidesStyle, setSlideElemProp } from './utils';

type TUseTransitionMonitoring = {
  sliderSlidesRef: MutableRefObject<(HTMLElement | null)[]>;
};

/**
 * @description Logic that implements animating styles to transition between slides
 */
export const useTransitionMonitoring = (options: TUseTransitionMonitoring) => {
  const { sliderSlidesRef } = options;
  const [transitionTicking, setTransitionTicking] = useState(false);
  const [prevSlideId, setPrevSlideId] = useState<undefined | number>(undefined);
  const [leftSlideId, setLeftSlideId] = useState<number>(1);
  const [rightSlideId, setRightSlideId] = useState<number>(2);

  const transitionMonitoring = (sliderElem: EventTarget & HTMLElement) => {
    const { width: slideWidth } = sliderElem.getBoundingClientRect();
    const currLeftPosition = sliderElem.scrollLeft;
    const startLeftPosition =
      Math.floor(currLeftPosition / slideWidth) * slideWidth;

    if (!transitionTicking) {
      window.requestAnimationFrame(() => {
        // Define left/right/prev slide ID
        const currLeftSlideId =
          startLeftPosition <= currLeftPosition
            ? Math.floor(currLeftPosition / slideWidth)
            : Math.ceil(currLeftPosition / slideWidth);
        const currRightSlideId =
          startLeftPosition <= currLeftPosition
            ? currLeftSlideId + 1
            : currLeftSlideId - 1;

        setLeftSlideId(definePrevSlide(currLeftSlideId, setPrevSlideId));
        setRightSlideId(currRightSlideId);

        // Handling transition left<->right slide element
        const leftSlideElem = sliderSlidesRef.current[currLeftSlideId];
        const rightSlideElem = sliderSlidesRef.current[currRightSlideId];
        const xShift = startLeftPosition - currLeftPosition;

        setSlideElemProp({
          slideElem: leftSlideElem,
          propName: POSTER_WIDTH_VAR_PROP,
          propsValue: `${slideWidth + xShift}px`,
        });

        setSlideElemProp({
          slideElem: rightSlideElem,
          propName: POSTER_WIDTH_VAR_PROP,
          propsValue: `${xShift * -1}px`,
        });

        setSlideElemProp({
          slideElem: rightSlideElem,
          propName: LEFT_START_VAR_PROP,
          propsValue: `${slideWidth + xShift}px`,
        });

        setTransitionTicking(false);
      });

      setTransitionTicking(true);
    }
  };

  useEffect(() => {
    // clearing inactive slides elements style, and potential stuck start position at left slide
    const slidesWithoutRight = sliderSlidesRef.current.filter(
      (_, slideId) => slideId !== rightSlideId,
    );

    resetSlidesStyle({
      slides: slidesWithoutRight,
      specificSlideId: leftSlideId,
    });
    // sliderSlidesRef.current[leftSlideId]?.scrollIntoView();
  }, [prevSlideId, leftSlideId, rightSlideId, sliderSlidesRef]);

  return { prevSlideId, leftSlideId, rightSlideId, transitionMonitoring };
};
