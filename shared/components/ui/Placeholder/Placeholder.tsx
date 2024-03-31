import { type ReactNode } from 'react';

import classes from './styles.module.css';

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
    <div className={classes.wrapper}>
      <div className={classes.innerContainer}>
        {imgSrc && (
          <img
            className={classes.image}
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        )}

        <div className={classes.title}>{title}</div>
        {description && (
          <div className={classes.description}>{description}</div>
        )}
      </div>

      {Actions && <div className={classes.footer}>{Actions}</div>}
    </div>
  );
};
