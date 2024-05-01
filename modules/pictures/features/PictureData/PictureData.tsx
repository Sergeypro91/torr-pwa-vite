import React from 'react';

import { MovieSlim, ShowSlim } from '@torr/data';

import { Details, Logo } from './components';
import { useLogic } from './useLogic';
import style from './styles.module.css';

export type TPictureDataProps = {
  pictureData: MovieSlim | ShowSlim;
};

export const PictureData = (props: TPictureDataProps) => {
  const {
    title,
    logoImgUrl,
    genres,
    mediaType,
    ratingCount,
    releaseDate,
    overview,
  } = useLogic(props);

  return (
    <div id={'data-info'} className={style['picture-data']}>
      <Logo title={title} logoImgUrl={logoImgUrl} />
      <Details
        genres={genres}
        mediaType={mediaType}
        ratingCount={ratingCount}
        releaseDate={releaseDate}
      />
      <p className={style.overview}>{overview}</p>
    </div>
  );
};

PictureData.displayName = 'PictureData';
