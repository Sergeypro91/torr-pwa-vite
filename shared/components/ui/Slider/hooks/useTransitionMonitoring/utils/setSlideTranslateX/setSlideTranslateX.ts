const TRANSITION_X_VARIABLE = '--local-transitionX';

export const setSlideTranslateX = ({
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
