import { RefObject } from 'react';

import { MARKER_BAR_WIDTH_VAR_PROP } from '../../constants.ts';
import { getMarkerBarDimensions } from '../getMarkerBarDimensions';

type TDefineMarkerBarWidthOptions = {
  markerBarRef: RefObject<HTMLDivElement>;
  visibleMarkersCount: number;
};

export const defineMarkerBarWidth = ({
  markerBarRef,
  visibleMarkersCount,
}: TDefineMarkerBarWidthOptions) => {
  const markerBarElem = markerBarRef.current;

  if (markerBarElem) {
    const { markerSlideGap, markerSlideMinWidth } =
      getMarkerBarDimensions(markerBarElem);

    const markerBarWidth =
      markerSlideMinWidth * visibleMarkersCount +
      markerSlideGap * (visibleMarkersCount - 1);

    markerBarElem.style.setProperty(
      MARKER_BAR_WIDTH_VAR_PROP,
      `${markerBarWidth}px`,
    );
  }
};
