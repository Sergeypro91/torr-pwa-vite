import { type ReactNode } from 'react';

import style from './styles.module.css';

export type PlaceholderProps = {
  imgSrc?: string;
  imgAlt?: string;
  imgWidth?: string;
  imgHeight?: string;
  title: JSX.Element | JSX.Element[] | string;
  description?: JSX.Element | JSX.Element[] | string;
  Actions?: ReactNode;
};

export const Placeholder = ({
  title,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  description,
  Actions,
}: PlaceholderProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.innerContainer}>
        {imgSrc && (
          <img
            className={style.image}
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        )}

        <div className={style.title}>{title}</div>
        {description && <div className={style.description}>{description}</div>}
      </div>

      {Actions && <div className={style.footer}>{Actions}</div>}
    </div>
  );
};
