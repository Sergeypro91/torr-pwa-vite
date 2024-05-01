import React from 'react';

import { MovieSlim, ShowSlim } from '@torr/data';

import { PicturePlayer } from '../PicturePlayer';
import { PicturePoster } from '../PicturePoster';
import { PictureData } from '../PictureData';

export type TPictureCardProps = {
  pictureData: MovieSlim | ShowSlim;
};

export const PictureCard = (props: TPictureCardProps) => {
  const { pictureData } = props;

  return (
    <>
      <PicturePlayer pictureData={pictureData} />
      <PicturePoster pictureData={pictureData} />
      <PictureData pictureData={pictureData} />
    </>
  );
};

PictureCard.displayName = 'PictureCard';
