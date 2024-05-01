import {
  MouseEvent,
  TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { debounce } from 'lodash-es';

import { useStore } from '../../useStore';
import {
  defineMarkerBarWidth,
  defineMarkerSlideInView,
  moveMarkerInBar,
  navigateToSlide,
  scrollToMarkerSlideOnDrag,
  setExtremeMarkersSize,
  setTimeoutToNext,
} from '../../utils';
import { SliderNavigationBarProps } from '../SliderNavigationBar.tsx';

export const useLogic = (props: SliderNavigationBarProps) => {
  const {
    sliderRef,
    slideCount,
    visibleMarkersCount = 8,
    timeoutToNext,
  } = props;
  const biggestSlideId = useStore((state) => state.biggestSlideId);
  const [isDraggable, setIsDraggable] = useState(false);
  const markerBarRef = useRef<HTMLUListElement>(null);

  const activeSlideId = useMemo(() => {
    if (!biggestSlideId) {
      return 0;
    }

    if (biggestSlideId <= slideCount - 1) {
      return biggestSlideId - 1;
    }

    return slideCount - 1;
  }, [biggestSlideId, slideCount]);

  const handleBarWrapClick = (event: MouseEvent<HTMLElement>) => {
    const BarWrapElem = event.target as HTMLElement;
    const BarWrapElemRect = BarWrapElem.getBoundingClientRect();
    const clickBarWrapLeftPos = event.clientX;
    const slideStep =
      clickBarWrapLeftPos - BarWrapElemRect.left > BarWrapElemRect.width / 2
        ? 1
        : -1;

    navigateToSlide({ slideId: biggestSlideId + slideStep, sliderRef });
  };

  const handleBarWrapDrag = (dragEvent: TouchEvent) => {
    setIsDraggable(true);
    scrollToMarkerSlideOnDrag({ sliderRef, markerBarRef, dragEvent });
  };

  const handleBarWrapDragEnd = () => {
    setIsDraggable(false);
  };

  const debouncedHandleScroll = useCallback(
    debounce(() => {
      defineMarkerSlideInView(markerBarRef);
      setExtremeMarkersSize(markerBarRef);
    }, 10),
    [activeSlideId, visibleMarkersCount],
  );

  const updateMarkerBarOnDragEnd = () => {
    setTimeout(() => {
      defineMarkerSlideInView(markerBarRef);
      setExtremeMarkersSize(markerBarRef);
      moveMarkerInBar({ markerBarRef, activeSlideId, visibleMarkersCount });
    }, 300);
  };

  useEffect(() => {
    defineMarkerBarWidth({ markerBarRef, visibleMarkersCount });
    moveMarkerInBar({ markerBarRef, activeSlideId, visibleMarkersCount });
    setTimeoutToNext({ markerBarRef, timeoutToNext });
    defineMarkerSlideInView(markerBarRef);
    setExtremeMarkersSize(markerBarRef);
  }, [activeSlideId, visibleMarkersCount, timeoutToNext]);

  useEffect(() => {
    if (!isDraggable) {
      updateMarkerBarOnDragEnd();
    }
  }, [isDraggable]);

  return {
    isDraggable,
    slideCount,
    markerBarRef,
    activeSlideId,
    debouncedHandleScroll,
    handleBarWrapDrag,
    handleBarWrapClick,
    handleBarWrapDragEnd,
  };
};
