import { useMemo } from 'react';

import { useAppStore } from '@torr/shared';

import { TPictureDataProps } from '../../PictureData';
import { useImageUrl } from '../../../domain';

export const useLogic = (props: TPictureDataProps) => {
  const {
    title,
    purePosterPath,
    posterPath,
    pureHPosterPath,
    hPosterPath,
    backdropPath,
  } = props.pictureData;
  const { width, height } = useAppStore((state) => state.screenDimension);

  const { getImageBySize } = useImageUrl();

  const posterImgUrl = useMemo(() => {
    const ratioCoefficient = width / height;
    let posterImgPath = null;

    if (ratioCoefficient < 1) {
      posterImgPath =
        purePosterPath ??
        posterPath ??
        pureHPosterPath ??
        hPosterPath ??
        backdropPath;
    } else {
      posterImgPath =
        pureHPosterPath ??
        hPosterPath ??
        backdropPath ??
        purePosterPath ??
        posterPath;
    }

    return getImageBySize({ imagePath: posterImgPath });
  }, [
    width,
    height,
    getImageBySize,
    purePosterPath,
    posterPath,
    pureHPosterPath,
    hPosterPath,
    backdropPath,
  ]);

  return {
    title,
    posterImgUrl,
  };
};
