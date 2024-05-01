import React from 'react';

import { useLogic } from './useLogic';
import { SliderNavigationBar } from './SliderNavigationBar';
import './styles.css';
import style from './styles.module.css';

export type TSlider<TSlide> = {
  slides: TSlide[];
  renderItem: (slide: TSlide) => React.JSX.Element;
};

export const Slider = <
  TSlide extends Record<string, unknown> = Record<string, unknown>,
>(
  props: TSlider<TSlide>,
) => {
  const { slides, renderItem } = props;
  const {
    sliderRef,
    timeoutToNext,
    extendedSlides,
    handleScroll,
    getSlideIdName,
  } = useLogic<TSlide>(props);

  return (
    <div className={style['slider-wrapper']}>
      <section
        ref={sliderRef}
        className={style.slider}
        onScrollCapture={handleScroll}
      >
        {extendedSlides.map((slide, slideId) => (
          <article
            key={slideId}
            id={getSlideIdName(slideId)}
            className={style.slide}
          >
            {renderItem(slide)}
          </article>
        ))}
      </section>
      <SliderNavigationBar
        sliderRef={sliderRef}
        slideCount={slides.length}
        timeoutToNext={timeoutToNext}
      />
    </div>
  );
};

Slider.displayName = 'Slider';
