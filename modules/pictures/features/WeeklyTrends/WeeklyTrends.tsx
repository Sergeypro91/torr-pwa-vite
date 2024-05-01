import React from 'react';

import { Slider } from '@torr/shared';
import { MovieSlim, ShowSlim } from '@torr/data';

import { PictureCard } from '../PictureCard';

import { useLogic } from './useLogic';

export const WeeklyTrends = () => {
  const { weeklyTrends, isLoading } = useLogic();

  if (isLoading) {
    return <span>LOADING...</span>;
  }

  return (
    <Slider
      slides={weeklyTrends}
      renderItem={(slide: MovieSlim | ShowSlim) => (
        <PictureCard pictureData={slide} />
      )}
    />
  );
};
