import { CSSProperties, useMemo } from 'react';

import { MovieSlim, ShowSlim } from '@torr/data';
import { getImageUrl } from '@torr/shared';

import style from './styles.module.css';

type TPictureCard = {
  picture: MovieSlim | ShowSlim;
  slideTransition?: number;
  isActive?: boolean;
  isNext?: boolean;
};

export const PictureCard = (props: TPictureCard) => {
  const { picture, isActive, isNext } = props;
  const slideTransition = useMemo(() => {
    const transition = props.slideTransition ?? 0;

    if (isActive) {
      return (transition ?? 0) / 2;
    }

    if (isNext && transition > 0) {
      return transition / 2 - 50;
    }

    if (isNext && transition < 0) {
      return transition / 2 + 50;
    }

    return 0;
  }, [props.slideTransition, isNext, isActive]);
  const slideTransitionStyle = {
    '--local-transition': `${slideTransition}%`,
  } as CSSProperties;
  const poster = useMemo(() => {
    const imagePath =
      picture.purePosterPath ?? picture.pureHPosterPath ?? picture.posterPath;

    return getImageUrl({ imagePath });
  }, [picture]);

  return (
    <div className={style['picture-card']} style={slideTransitionStyle}>
      {poster ? (
        <img
          id="poster"
          src={poster}
          alt={picture.title}
          className={style.poster}
          loading="lazy"
        />
      ) : null}
      <span>{picture.title}</span>
    </div>
  );
};
