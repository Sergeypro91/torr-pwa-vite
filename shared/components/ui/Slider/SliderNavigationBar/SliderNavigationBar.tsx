import { MutableRefObject } from 'react';

import { cn } from '@torr/shared';

import { MARKER_SLIDE_ID_SELECTOR } from '../constants.ts';

import { useLogic } from './useLogic';
import style from './styles.module.css';

export type SliderNavigationBarProps = {
  sliderRef: MutableRefObject<HTMLElement | null>;
  slideCount: number;
  timeoutToNext: number;
  visibleMarkersCount?: number;
};

export const SliderNavigationBar = (props: SliderNavigationBarProps) => {
  const {
    slideCount,
    isDraggable,
    markerBarRef,
    activeSlideId,
    debouncedHandleScroll,
    handleBarWrapDrag,
    handleBarWrapClick,
    handleBarWrapDragEnd,
  } = useLogic(props);

  return (
    <div
      className={cn([
        style['marker-bar-wrapper'],
        isDraggable && style['draggable'],
      ])}
      onClick={handleBarWrapClick}
      onTouchMoveCapture={handleBarWrapDrag}
      onTouchEndCapture={handleBarWrapDragEnd}
    >
      <ul
        ref={markerBarRef}
        className={style['marker-bar']}
        onScroll={debouncedHandleScroll}
      >
        {Array(slideCount)
          .fill(true)
          .map((_, slideId) => (
            <li
              key={`slide-marker--${slideId}`}
              className={cn([
                style['slide-marker'],
                slideId === activeSlideId && style['slide-marker--active'],
                MARKER_SLIDE_ID_SELECTOR(slideId),
              ])}
            />
          ))}
      </ul>
    </div>
  );
};

SliderNavigationBar.displayName = 'SliderNavigationBar';
