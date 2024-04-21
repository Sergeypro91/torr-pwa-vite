import { RefObject } from 'react';

import {
  defineMarkerBarWidth,
  defineMarkerSlideInView,
  moveMarkerInBar,
  setExtremeMarkersSize,
} from '@torr/shared/components/ui/Slider/utils';

/**
 * @description Tasks must be executed in exactly the same sequence as bellow:
 * @example 1. defineMarkerBarWidth (if using, sequence - first)
 * @example 2. moveMarkerInBar (if using, after defineMarkerBarWidth)
 * @example 3. defineMarkerSlideInView (if using, after defineMarkerBarWidth)
 * @example 4. setExtremeMarkersSize (using only with, and after defineMarkerSlideInView)
 */
export const executeMarkerBarSequentialTasks = (
  markerBarRef: RefObject<HTMLDivElement>,
) => {
  const api = {
    defineMarkerBarWidth(visibleMarkersCount: number) {
      defineMarkerBarWidth({
        markerBarRef,
        visibleMarkersCount,
      });

      return api;
    },

    moveMarkerInBar(activeSlideId: number) {
      moveMarkerInBar({
        markerBarRef,
        activeSlideId,
      });

      return api;
    },

    defineMarkerSlideInView() {
      defineMarkerSlideInView(markerBarRef);

      return api;
    },

    setExtremeMarkersSize() {
      setExtremeMarkersSize(markerBarRef);

      return api;
    },
  };

  return api;
};
