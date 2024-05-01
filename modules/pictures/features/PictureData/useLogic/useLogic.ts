import { capitaliseFirst } from '@torr/shared';

import { TPictureDataProps } from '../PictureData';
import { useImageUrl } from '../../../domain';
import { defineGenres, defineRating, defineReleaseDate } from '../utils';

export const useLogic = (props: TPictureDataProps) => {
  const {
    title,
    mediaType,
    logoPath,
    genres,
    voteAverage,
    popularity,
    releaseDate,
    overview,
  } = props.pictureData;
  const { getImageBySize } = useImageUrl();

  return {
    title,
    mediaType: capitaliseFirst(mediaType),
    genres: defineGenres({ genres, mediaType }),
    logoImgUrl: getImageBySize({ imagePath: logoPath, imageSize: 300 }),
    ratingCount: defineRating({ mediaType, voteAverage, popularity }) ?? 0,
    releaseDate: defineReleaseDate(releaseDate),
    overview,
  };
};
