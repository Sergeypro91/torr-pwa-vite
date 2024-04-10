import { CarouselContent, CarouselItem } from '@torr/shared';

import { PictureCard } from '../../PictureCard';
import { TPictureSlider } from '../types.tsx';

import { useSlideTransition } from './hooks';
import style from './styles.module.css';

export const PictureSliderContent = (props: TPictureSlider) => {
  const { pictures } = props;
  const { slideTransition, currentSlide, nextSlide } = useSlideTransition();

  return (
    <CarouselContent>
      {pictures.map((picture, slideIndex) => (
        <CarouselItem
          key={`${picture.mediaType}-${picture.tmdbId}`}
          className={style['carousel-item']}
        >
          <PictureCard
            picture={picture}
            slideTransition={slideTransition}
            isActive={slideIndex === currentSlide}
            isNext={slideIndex === nextSlide}
          />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};
