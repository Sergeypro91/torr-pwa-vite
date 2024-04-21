import React, { useMemo } from 'react';

import { MovieSlim, ShowSlim } from '@torr/data';
import { getImageUrl } from '@torr/shared';

import style from './styles.module.css';

export type TPictureCard = {
  picture: MovieSlim | ShowSlim;
};

export const PictureCard = (props: TPictureCard) => {
  const { picture } = props;

  const poster = useMemo(() => {
    const imagePath =
      picture.purePosterPath ?? picture.pureHPosterPath ?? picture.posterPath;

    return getImageUrl({ imagePath });
  }, [picture]);

  return (
    <div className={style['picture-card']}>
      {poster ? (
        <img
          src={poster}
          alt="slide"
          id="background"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <span>{picture.title}</span>
    </div>
  );
};
