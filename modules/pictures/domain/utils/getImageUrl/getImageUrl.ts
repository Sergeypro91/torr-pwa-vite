import { IMAGE_API_URL } from './constants.ts';

export type TImageSize =
  | 'w45'
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w300'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'w1280'
  | 'original';

type TGetImageUrl = {
  imagePath: null | string;
  imageSize?: TImageSize;
};

export const getImageUrl = ({
  imagePath = '',
  imageSize = 'original',
}: TGetImageUrl) => {
  return `${IMAGE_API_URL}/${imageSize}${imagePath}`;
};
