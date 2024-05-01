import { RefObject } from 'react';

import { setElemProp } from '@torr/shared';

import {
  MARKER_SCALE_VAR_PROP,
  MARKER_SLIDE_ID_SELECTOR,
  VIEWABLE_SLIDE_MARKER_ID,
} from '../../constants.ts';

export const setExtremeMarkersSize = (
  markerBarRef: RefObject<HTMLUListElement>,
) => {
  const markerBarElem = markerBarRef.current;
  const markerSlidesElem = Array.from(markerBarElem?.children ?? []);
  const slideCount = markerSlidesElem.length;

  const markersInView = markerSlidesElem.filter(
    (markerElem) => markerElem.id === VIEWABLE_SLIDE_MARKER_ID,
  );

  const smallestMarkerSlides = markersInView.filter(
    (markerElem, markerId) =>
      (markerId === 0 || markerId === markersInView.length - 1) &&
      !Array.from(markerElem.classList).includes(MARKER_SLIDE_ID_SELECTOR(0)) &&
      !Array.from(markerElem.classList).includes(
        MARKER_SLIDE_ID_SELECTOR(slideCount - 1),
      ),
  );

  const averageMarkerSlides = markersInView.filter(
    (markerElem, markerId) =>
      (markerId === 1 || markerId === markersInView.length - 2) &&
      !Array.from(markerElem.classList).includes(MARKER_SLIDE_ID_SELECTOR(1)) &&
      !Array.from(markerElem.classList).includes(
        MARKER_SLIDE_ID_SELECTOR(slideCount - 2),
      ),
  );

  smallestMarkerSlides.forEach((markerElem) =>
    setElemProp({
      element: markerElem,
      propName: MARKER_SCALE_VAR_PROP,
      propValue: '0.5',
    }),
  );

  averageMarkerSlides.forEach((markerElem) =>
    setElemProp({
      element: markerElem,
      propName: MARKER_SCALE_VAR_PROP,
      propValue: '0.75',
    }),
  );
};
