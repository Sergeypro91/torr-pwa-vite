import { MediaType } from '@torr/data';

type TDefineRatingOptions = {
  mediaType: `${MediaType}`;
  popularity?: number;
  voteAverage?: number;
};

export const defineRating = ({
  mediaType,
  popularity,
  voteAverage,
}: TDefineRatingOptions) => {
  if (mediaType !== MediaType.PERSON) {
    return voteAverage;
  }

  return popularity;
};
