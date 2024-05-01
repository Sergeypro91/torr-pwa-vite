import { useCallback } from 'react';

import { roundToLargestNumber, useAppStore } from '@torr/shared';

import { TImageSize, getImageUrl } from '../../../domain';

import { IMG_SIZES } from './constamts.ts';

type TGetImageBySizeOptions = {
  imagePath?: null | string;
  imageSize?: number;
};

export const useImageUrl = () => {
  const { width } = useAppStore((state) => state.screenDimension);

  const getImageBySize = useCallback(
    ({ imagePath, imageSize }: TGetImageBySizeOptions) => {
      const size = roundToLargestNumber({
        number: (imageSize ?? width) * window.devicePixelRatio,
        numberArr: IMG_SIZES,
      });
      const imageSizeBySize =
        size < IMG_SIZES[IMG_SIZES.length - 1]
          ? (`w${size}` as TImageSize)
          : 'original';

      return imagePath
        ? getImageUrl({ imagePath, imageSize: imageSizeBySize })
        : undefined;
    },
    [width],
  );

  return { getImageBySize };
};
