import React, { CSSProperties, useContext } from 'react';

import {
  Button,
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
  cn,
} from '@torr/shared';

import { PageLayoutContext } from '../PageLayout.tsx';

import style from './styles.module.css';

type HeaderType = {
  title?: string;
  actions?: React.JSX.Element;
  backButton?: boolean;
};

export const Header = (props: HeaderType) => {
  const { title = '', actions, backButton = false } = props;
  const { scrollCoefficient } = useContext(PageLayoutContext);
  const headerStyle = {
    '--local-coefficient': scrollCoefficient,
  } as CSSProperties;

  return (
    <header
      className={cn([
        style.header,
        scrollCoefficient <= 50 && style.compressed,
      ])}
      style={headerStyle}
    >
      <section className={style.wrapper}>
        {backButton ? <Button iconStart={<ChevronLeftIcon />} /> : null}
        <div className={style.extras}>
          <div className={style.title}>{title}</div>
        </div>
        {actions ? (
          <Button
            size={scrollCoefficient <= 50 ? 'small' : 'medium'}
            variant="contained"
            iconStart={<EllipsisHorizontalIcon />}
          />
        ) : null}
      </section>
    </header>
  );
};
