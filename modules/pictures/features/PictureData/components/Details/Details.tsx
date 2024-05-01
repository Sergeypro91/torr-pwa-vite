import React from 'react';

import { RatingLabel } from '@torr/shared';

import style from './styles.module.css';

type TDetailsProps = {
  genres: string;
  mediaType: string;
  ratingCount: number;
  releaseDate: string;
};

export const Details = (props: TDetailsProps) => {
  const { genres, mediaType, ratingCount, releaseDate } = props;

  return (
    <dl className={style.details}>
      <dt className={style['details-header']}>{genres}</dt>
      <dd className={style['details-footer']}>
        <RatingLabel ratingCount={ratingCount} />
        <span>{mediaType}</span>
        <time>{releaseDate}</time>
      </dd>
    </dl>
  );
};

Details.displayName = 'PictureDetails';
