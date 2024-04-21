import { cn } from '@torr/shared';

import { MARKER_SLIDE_ID_SELECTOR } from '../constants.ts';

import { useLogic } from './useLogic';
import style from './styles.module.css';

export type SliderNavigationBarProps = {
  slideCount: number;
  visibleMarkersCount?: number;
};

export const SliderNavigationBar = (props: SliderNavigationBarProps) => {
  const { slideCount, markerBarRef, activeSlideId, debouncedHandleScroll } =
    useLogic(props);

  return (
    <div className={style['marker-bar-wrapper']}>
      <div
        ref={markerBarRef}
        className={style['marker-bar']}
        onScroll={debouncedHandleScroll}
      >
        {Array(slideCount)
          .fill(true)
          .map((_, slideId) => (
            <div
              key={`slide-marker--${slideId}`}
              className={cn([
                style['slide-marker'],
                slideId === activeSlideId && style['slide-marker--active'],
                MARKER_SLIDE_ID_SELECTOR(slideId),
              ])}
            />
          ))}
      </div>
    </div>
  );
};

SliderNavigationBar.displayName = 'SliderNavigationBar';
