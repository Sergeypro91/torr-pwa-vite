import { MutableRefObject, TouchEvent } from 'react';

import { navigateToSlide } from '../navigateToSlide';

type TScrollMarkerBarOnDragOptions = {
  sliderRef: MutableRefObject<HTMLElement | null>;
  markerBarRef: MutableRefObject<HTMLElement | null>;
  dragEvent: TouchEvent;
};

export const scrollToMarkerSlideOnDrag = ({
  sliderRef,
  markerBarRef,
  dragEvent,
}: TScrollMarkerBarOnDragOptions) => {
  const markerBarElem = markerBarRef.current;

  if (markerBarElem) {
    const markerSlidesXPositions = Array.from(markerBarElem.children).map(
      (markerElem) => markerElem.getBoundingClientRect().left,
    );
    const dragXPosition = dragEvent.targetTouches[0].clientX;

    markerSlidesXPositions.forEach((markerXPos, id, array) => {
      if (
        (markerXPos <= dragXPosition && array[id + 1] > dragXPosition) ||
        (id === array.length - 1 && markerXPos < dragXPosition)
      ) {
        navigateToSlide({
          slideId: id + 1,
          duration: 0,
          sliderRef,
        });
      }
    });
  }
};
