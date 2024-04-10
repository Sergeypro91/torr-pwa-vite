import { Dispatch, SetStateAction } from 'react';

type TScrollMonitoring = {
  sliderElem: EventTarget & HTMLElement;
  setScrollTicking: Dispatch<SetStateAction<boolean>>;
};

export const scrollMonitoring = ({
  sliderElem,
  setScrollTicking,
}: TScrollMonitoring) => {
  const { width } = sliderElem.getBoundingClientRect();
  const currentScrollPosition = sliderElem.scrollLeft;
  const sliderChildren = Array.from(sliderElem.children);
  const lastSlideElemId = sliderChildren.length - 1;

  if (currentScrollPosition <= 0) {
    sliderElem.style.scrollSnapType = 'none';

    sliderChildren[lastSlideElemId - 1].scrollIntoView({
      behavior: 'instant',
    });
  }

  if (currentScrollPosition >= width * lastSlideElemId) {
    sliderElem.style.scrollSnapType = 'none';

    sliderChildren[1].scrollIntoView({
      behavior: 'instant',
    });
  }

  setScrollTicking(false);
};
