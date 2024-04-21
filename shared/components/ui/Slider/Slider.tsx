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
  const { sliderRef, extendedSlides, handleScroll } = useLogic<TSlide>(props);

  const getSlideIdName = (slideId: number) => {
    if (slideId === 0 || slideId === extendedSlides.length - 1) {
      return 'clone';
    }

    return undefined;
  };

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
            {renderItem(slide as TSlide)}
          </article>
        ))}
      </section>
      <SliderNavigationBar slideCount={slides.length} />
    </div>
  );
};

Slider.displayName = 'Slider';
