import { LEFT_START_VAR_PROP, POSTER_WIDTH_VAR_PROP } from '../../constants.ts';

type TresetSlideStyle = {
  slides: (null | HTMLElement)[];
  specificSlideId: number;
};

export const resetSlidesStyle = ({
  slides,
  specificSlideId,
}: TresetSlideStyle) => {
  slides.forEach((slide, slideId) => {
    if (slide) {
      if (slideId !== specificSlideId) {
        slide.style.removeProperty(POSTER_WIDTH_VAR_PROP);
      }

      slide.style.removeProperty(LEFT_START_VAR_PROP);
    }
  });
};
