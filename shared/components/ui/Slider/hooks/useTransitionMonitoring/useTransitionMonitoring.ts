import { MutableRefObject, useState } from 'react';

import { disappearingTranslateX, setSlideTranslateX } from './utils';

type TUseTransitionMonitoring = {
  currLeftPosition: number;
  startLeftPosition: number;
  sliderSlidesRef: MutableRefObject<(HTMLElement | null)[]>;
};

export const useTransitionMonitoring = (oprions: TUseTransitionMonitoring) => {
  const { startLeftPosition, currLeftPosition, sliderSlidesRef } = oprions;
  const [transitionTicking, setTransitionTicking] = useState(false);
  const [appearingSlideId, setAppearingSlideId] = useState<number>(1);
  const [disappearingSlideId, setDisappearingSlideId] = useState<number>(2);

  const transitionMonitoring = (sliderElem: EventTarget & HTMLElement) => {
    if (!transitionTicking) {
      window.requestAnimationFrame(() => {
        // Define appearing/disappearing slide ID
        const { width } = sliderElem.getBoundingClientRect();
        const currAppearingSlideId = Math.round(currLeftPosition / width);
        const currDisappearingSlideId =
          startLeftPosition <= currLeftPosition
            ? currAppearingSlideId + 1
            : currAppearingSlideId - 1;

        setAppearingSlideId(currAppearingSlideId);
        setDisappearingSlideId(currDisappearingSlideId);

        // Handling transition for appearing/disappearing slide element
        const appearingSlideElem =
          sliderSlidesRef.current[currAppearingSlideId];
        const disappearingSlideElem =
          sliderSlidesRef.current[currDisappearingSlideId];
        const xShift = startLeftPosition - currLeftPosition;
        const appearingTranslateX = -xShift / 2;

        setSlideTranslateX({
          slideElem: appearingSlideElem,
          translateX: appearingTranslateX,
        });

        setSlideTranslateX({
          slideElem: disappearingSlideElem,
          translateX: disappearingTranslateX({ shift: xShift, width }),
        });

        setTransitionTicking(false);
      });

      setTransitionTicking(true);
    }
  };

  return { appearingSlideId, disappearingSlideId, transitionMonitoring };
};
