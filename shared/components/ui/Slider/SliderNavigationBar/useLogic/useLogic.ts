import { useCallback, useEffect, useMemo, useRef } from 'react';
import { debounce } from 'lodash-es';

import { useStore } from '../../useStore';
import { executeMarkerBarSequentialTasks, moveMarkerInBar } from '../../utils';
import { SliderNavigationBarProps } from '../SliderNavigationBar.tsx';

export const useLogic = (props: SliderNavigationBarProps) => {
  const { slideCount, visibleMarkersCount = 9 } = props;
  const biggestSlideId = useStore((state) => state.biggestSlideId);
  const markerBarRef = useRef<HTMLDivElement>(null);

  const activeSlideId = useMemo(() => {
    if (!biggestSlideId) {
      return 0;
    }

    if (biggestSlideId <= slideCount - 1) {
      return biggestSlideId - 1;
    }

    return slideCount - 1;
  }, [biggestSlideId, slideCount]);

  const debouncedHandleScroll = useCallback(
    debounce(() => {
      executeMarkerBarSequentialTasks(markerBarRef)
        .defineMarkerSlideInView()
        .setExtremeMarkersSize();
    }, 10),
    [],
  );

  useEffect(() => {
    executeMarkerBarSequentialTasks(markerBarRef)
      .defineMarkerBarWidth(visibleMarkersCount)
      .defineMarkerSlideInView()
      .setExtremeMarkersSize();
  }, [visibleMarkersCount]);

  useEffect(() => {
    moveMarkerInBar({
      markerBarRef,
      activeSlideId,
    });
  }, [activeSlideId]);

  return { slideCount, markerBarRef, activeSlideId, debouncedHandleScroll };
};
