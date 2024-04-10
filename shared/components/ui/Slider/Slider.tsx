import React, { ReactNode } from 'react';

import { useLogic } from './useLogic';
import './styles.css';
import style from './styles.module.css';

export type TSlider<TSlide> = {
  slides: TSlide[];
};

const imageUrl =
  'https://media.istockphoto.com/id/806894546/de/vektor/schachbrettmuster-schwarz-wei%C3%9F.jpg?s=1024x1024&w=is&k=20&c=uKnSDOIsR89g5IxgaYNRUD0XPBuKwJXMmhEmYMLSFG0=';

export const Slider = <TSlide extends ReactNode>(props: TSlider<TSlide>) => {
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
            <img src={imageUrl} alt="checker" id="background" />
            {slide}
          </article>
        ))}
      </section>
    </div>
  );
};

Slider.displayName = 'Slider';
