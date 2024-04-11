import { CarouselContent, CarouselItem } from '@torr/shared';

import { PictureCard } from '../../PictureCard';
import { TPictureSlider } from '../types.tsx';

import style from './styles.module.css';

export const PictureSliderContent = (props: TPictureSlider) => {
  const { pictures } = props;

  return (
    <CarouselContent>
      {pictures.map((picture) => (
        <CarouselItem
          key={`${picture.mediaType}-${picture.tmdbId}`}
          className={style['carousel-item']}
        >
          <PictureCard picture={picture} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};
