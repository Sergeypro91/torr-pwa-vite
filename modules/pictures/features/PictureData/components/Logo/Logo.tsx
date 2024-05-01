import React, { useState } from 'react';

import style from './styles.module.css';

type TLogoProps = {
  title: string;
  logoImgUrl?: string;
};

export const Logo = (props: TLogoProps) => {
  const { title, logoImgUrl } = props;
  const [isImgErrOnLoad, setIsImgErrOnLoad] = useState(false);

  const handleImgError = () => {
    setIsImgErrOnLoad(true);
  };

  if (isImgErrOnLoad || !logoImgUrl) {
    return <cite className={style.logo}>{title}</cite>;
  }

  return (
    <img
      src={logoImgUrl}
      alt={title}
      loading="lazy"
      decoding="async"
      className={style.logo}
      onError={handleImgError}
    />
  );
};

Logo.displayName = 'PictureLogo';
