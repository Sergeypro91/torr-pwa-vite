import { setElemProp } from '../setElemProp';
import { LEFT_START_VAR_PROP, POSTER_WIDTH_VAR_PROP } from '../../constants.ts';

type THandleTransitionBetweenSlides = {
  sliderElem: HTMLElement;
  setLeftSlideId: (slideId: number) => void;
  setRightSlideId: (slideId: number) => void;
  setBiggestSlideId: (slideId: number) => void;
};

export const handleTransitionBetweenSlides = ({
  sliderElem,
  setLeftSlideId,
  setRightSlideId,
  setBiggestSlideId,
}: THandleTransitionBetweenSlides) => {
  // Define left/right/prev slide ID
  const { width: slideWidth } = sliderElem.getBoundingClientRect();
  const currLeftPosition = sliderElem.scrollLeft;
  const startLeftPosition =
    Math.floor(currLeftPosition / slideWidth) * slideWidth;
  const currLeftSlideId =
    startLeftPosition <= currLeftPosition
      ? Math.floor(currLeftPosition / slideWidth)
      : Math.ceil(currLeftPosition / slideWidth);
  const currRightSlideId =
    startLeftPosition <= currLeftPosition
      ? currLeftSlideId + 1
      : currLeftSlideId - 1;
  const currBiggestSlideId = Math.round(currLeftPosition / slideWidth);

  setLeftSlideId(currLeftSlideId);
  setRightSlideId(currRightSlideId);
  setBiggestSlideId(currBiggestSlideId);

  // Handling animation left<->right slide background image
  const leftSlideElem = sliderElem.children[currLeftSlideId];
  const rightSlideElem = sliderElem.children[currRightSlideId];
  const xShift = startLeftPosition - currLeftPosition;

  setElemProp({
    element: leftSlideElem,
    propName: POSTER_WIDTH_VAR_PROP,
    propValue: `${slideWidth + xShift}px`,
  });

  setElemProp({
    element: rightSlideElem,
    propName: POSTER_WIDTH_VAR_PROP,
    propValue: `${xShift * -1}px`,
  });

  setElemProp({
    element: rightSlideElem,
    propName: LEFT_START_VAR_PROP,
    propValue: `${slideWidth + xShift}px`,
  });
};
