import { Dispatch, MutableRefObject, SetStateAction } from 'react';

const TRANSITION_X_VARIABLE = '--local-transitionX';

type TTransitionMonitoring = {
  sliderElem: EventTarget & HTMLElement;
  currLeftPosition: number;
  startLeftPosition: number;
  sliderSlidesRef: MutableRefObject<(HTMLElement | null)[]>;
  setAppearingSlideId: Dispatch<SetStateAction<number>>;
  setDisappearingSlideId: Dispatch<SetStateAction<number>>;
  setTransitionTicking: Dispatch<SetStateAction<boolean>>;
};

export const transitionMonitoring = ({
  sliderElem,
  currLeftPosition,
  startLeftPosition,
  sliderSlidesRef,
  setAppearingSlideId,
  setDisappearingSlideId,
  setTransitionTicking,
}: TTransitionMonitoring) => {
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
  const appearingSlideElem = sliderSlidesRef.current[currAppearingSlideId];
  const disappearingSlideElem =
    sliderSlidesRef.current[currDisappearingSlideId];
  const xShift = startLeftPosition - currLeftPosition;
  const appearingTranslateX = -xShift / 2;

  const disappearingTranslateX = (shift: number) => {
    if (shift > 1) {
      return -shift / 2 + width / 2;
    }

    if (shift < -1) {
      return -shift / 2 - width / 2;
    }

    return 0;
  };

  const setSlideTranslateX = ({
    slideElem,
    translateX,
  }: {
    slideElem: HTMLElement | null;
    translateX: number;
  }) => {
    if (slideElem) {
      slideElem.style.setProperty(TRANSITION_X_VARIABLE, `${translateX}px`);
    }
  };

  setSlideTranslateX({
    slideElem: appearingSlideElem,
    translateX: appearingTranslateX,
  });

  setSlideTranslateX({
    slideElem: disappearingSlideElem,
    translateX: disappearingTranslateX(xShift),
  });

  setTransitionTicking(false);
};
