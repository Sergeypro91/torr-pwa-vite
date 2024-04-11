import React from 'react';

import { useLogic } from './useLogic';
import './styles.css';
import style from './styles.module.css';

export type TSlider<TSlide extends unknown = unknown> = {
  slides: TSlide[];
  renderItem: (slide: TSlide) => React.JSX.Element;
};

export const Slider = <TSlide extends unknown>(props: TSlider<TSlide>) => {
  const { renderItem } = props;
  const { sliderRef, extendedSlides, sliderSlidesRef, handleScroll } =
    useLogic(props);

  return (
    <div className={style['slider-wrapper']}>
      <section
        ref={sliderRef}
        className={style.slider}
        onScrollCapture={handleScroll}
      >
        {extendedSlides.map((slide, slideId) => (
          <article
            key={slideId + 1}
            ref={(element) => (sliderSlidesRef.current[slideId] = element)}
            id="slider"
            className={style.slide}
          >
            {renderItem(slide)}
          </article>
        ))}
      </section>
    </div>
  );
};

Slider.displayName = 'Slider';
