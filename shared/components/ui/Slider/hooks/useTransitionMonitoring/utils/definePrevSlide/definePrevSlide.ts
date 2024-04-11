import { Dispatch, SetStateAction } from 'react';

export const definePrevSlide =
  (
    currentSlideId: number,
    setPrevSlideId: Dispatch<SetStateAction<number | undefined>>,
  ) =>
  (prevSlideId: number) => {
    if (prevSlideId !== currentSlideId) {
      setPrevSlideId(prevSlideId);
    }

    return currentSlideId;
  };
