import { TRatingLabelProps } from '../RatingLabel.tsx';

export const useLogic = (props: TRatingLabelProps) => {
  const { ratingCount = 0.0 } = props;

  const defineRatingCategory = (ratingCount: number = 0) => {
    if (ratingCount > 8) {
      return 'best';
    }

    if (ratingCount > 7) {
      return 'good';
    }

    if (ratingCount > 6) {
      return 'normal';
    }

    return 'waste';
  };

  return { ratingCount: ratingCount.toFixed(1), defineRatingCategory };
};
