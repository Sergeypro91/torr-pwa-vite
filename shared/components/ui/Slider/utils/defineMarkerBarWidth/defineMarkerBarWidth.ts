import { RefObject } from 'react';

import { MARKER_BAR_WIDTH_VAR_PROP } from '../../constants.ts';
import { getMarkerBarDimensions } from '../getMarkerBarDimensions';

type TDefineMarkerBarWidthOptions = {
  markerBarRef: RefObject<HTMLUListElement>;
  visibleMarkersCount: number;
};

export const defineMarkerBarWidth = ({
  markerBarRef,
  visibleMarkersCount,
}: TDefineMarkerBarWidthOptions) => {
  const markerBarElem = markerBarRef.current;

  if (markerBarElem) {
    const { markerBarWidth } = getMarkerBarDimensions({
      markerBarElem,
      visibleMarkersCount,
    });

    markerBarElem.style.setProperty(
      MARKER_BAR_WIDTH_VAR_PROP,
      `${markerBarWidth}px`,
    );
  }
};
