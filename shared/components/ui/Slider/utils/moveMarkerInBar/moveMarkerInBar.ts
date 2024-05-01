import { RefObject } from 'react';

import { getMarkerBarDimensions } from '../../utils';

type TMoveMarkerInBarOptions = {
  markerBarRef: RefObject<HTMLUListElement>;
  activeSlideId: number;
  visibleMarkersCount: number;
};

export const moveMarkerInBar = ({
  markerBarRef,
  activeSlideId,
  visibleMarkersCount,
}: TMoveMarkerInBarOptions) => {
  const markerBarElem = markerBarRef.current;
  const markerSlidesElem = Array.from(
    markerBarElem?.children ?? [],
  ) as HTMLElement[];

  if (markerBarElem) {
    const {
      markerBarRect,
      markerSlideMinWidth,
      markerSlideMaxWidth,
      markerSlideGap,
    } = getMarkerBarDimensions({ markerBarElem, visibleMarkersCount });
    const currViewedBarWidth = markerBarRect.width;
    const currActiveElemPosition =
      markerSlidesElem[activeSlideId].getBoundingClientRect().left -
      markerBarRect.left;
    const minLeftPosition = (markerSlideMinWidth + markerSlideGap) * 2;
    const minRightPosition =
      currViewedBarWidth -
      (markerSlideMaxWidth + markerSlideGap + markerSlideMinWidth);

    if (currActiveElemPosition >= minRightPosition) {
      markerBarElem.scrollLeft =
        markerBarElem.scrollLeft +
        (currActiveElemPosition -
          minRightPosition +
          markerSlideMinWidth +
          markerSlideGap);
    }

    if (currActiveElemPosition <= minLeftPosition) {
      markerBarElem.scrollLeft =
        markerBarElem.scrollLeft +
        currActiveElemPosition -
        (markerSlideMaxWidth +
          markerSlideGap +
          markerSlideMinWidth +
          markerSlideGap);
    }

    if (activeSlideId === markerSlidesElem.length - 1) {
      markerBarElem.scrollLeft = markerBarElem.scrollWidth;
    }
  }
};
