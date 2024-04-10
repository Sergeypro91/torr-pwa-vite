import { Carousel } from '@torr/shared';

import { PictureSliderContent } from './PictureSliderContent';
import { TPictureSlider } from './types.tsx';
import style from './styles.module.css';

export const PictureSlider = (props: TPictureSlider) => {
  const { pictures } = props;

  return (
    <Carousel
      className={style.carousel}
      opts={{
        loop: true,
      }}
    >
      <PictureSliderContent pictures={pictures} />
    </Carousel>
  );
};

PictureSlider.displayName = 'PictureSlider';
