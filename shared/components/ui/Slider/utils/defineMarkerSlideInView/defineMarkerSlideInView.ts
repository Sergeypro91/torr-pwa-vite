import { RefObject } from 'react';

import {
  MARKER_SCALE_VAR_PROP,
  VIEWABLE_SLIDE_MARKER_ID,
} from '../../constants.ts';

export const defineMarkerSlideInView = (
  markerBarRef: RefObject<HTMLDivElement>,
) => {
  const markerBarElem = markerBarRef.current;
  const markerSlidesElem = Array.from(
    markerBarElem?.children ?? [],
  ) as HTMLElement[];

  if (markerBarElem) {
    const markerBarRect = markerBarElem.getBoundingClientRect();

    markerSlidesElem.forEach((markerSlideElem) => {
      const markerSlideRect = markerSlideElem.getBoundingClientRect();

      if (
        markerBarRect.left <= markerSlideRect.left &&
        markerSlideRect.left <= markerBarRect.left + markerBarRect.width
      ) {
        markerSlideElem.id = VIEWABLE_SLIDE_MARKER_ID;
        markerSlideElem.style.setProperty(MARKER_SCALE_VAR_PROP, '1');
      } else {
        markerSlideElem.removeAttribute('id');
        markerSlideElem.style.removeProperty(MARKER_SCALE_VAR_PROP);
      }
    });
  }

  return;
};
