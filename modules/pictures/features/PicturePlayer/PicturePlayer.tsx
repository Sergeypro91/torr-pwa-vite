import { MovieSlim, ShowSlim } from '@torr/data';

import style from './styles.module.css';

type TPicturePlayerProps = {
  pictureData: MovieSlim | ShowSlim;
};

export const PicturePlayer = (props: TPicturePlayerProps) => {
  return <div className={style['PicturePlayer']}>COMPONENT PicturePlayer</div>;
};

PicturePlayer.displayName = 'PicturePlayer';
