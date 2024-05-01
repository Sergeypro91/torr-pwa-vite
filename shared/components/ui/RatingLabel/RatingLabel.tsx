import React from 'react';

import { cn } from '@torr/shared';

import { useLogic } from './useLogic';
import style from './styles.module.css';

export type TRatingLabelProps = {
  className?: string;
  ratingCount?: number;
};

export const RatingLabel = (props: TRatingLabelProps) => {
  const { className } = props;
  const { ratingCount, defineRatingCategory } = useLogic(props);

  return (
    <span
      className={cn([
        className,
        style['wrapper'],
        style[defineRatingCategory(props.ratingCount)],
      ])}
    >
      <var className={style['rating-label']}>{ratingCount}</var>
    </span>
  );
};

RatingLabel.displayName = 'RatingLabel';
