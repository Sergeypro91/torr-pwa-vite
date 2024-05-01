import React from 'react';

import { MovieSlim, ShowSlim } from '@torr/data';

import { useLogic } from './useLogic';
import { POSTER_ID } from './constants';

type TPicturePosterProps = { pictureData: MovieSlim | ShowSlim };

export const PicturePoster = (props: TPicturePosterProps) => {
  const { title, posterImgUrl } = useLogic(props);

  if (!posterImgUrl) {
    return null;
  }

  return (
    <img
      src={posterImgUrl}
      alt={title}
      id={POSTER_ID}
      loading="lazy"
      decoding="async"
    />
  );
};

PicturePoster.displayName = 'PicturePoster';
