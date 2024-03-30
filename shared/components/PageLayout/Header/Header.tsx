import React, { CSSProperties, useContext } from 'react';

import { ChevronLeftIcon, EllipsisHorizontalIcon } from '@torr/shared';

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
  const headerId = scrollCoefficient <= 50 ? style.compressed : '';
  const headerStyle = {
    '--coefficient': scrollCoefficient,
  } as CSSProperties;

  return (
    <div id={headerId} className={style.header} style={headerStyle}>
      <div className={style.wrapper}>
        {backButton ? (
          <button>
            <ChevronLeftIcon />
          </button>
        ) : null}
        <div className={style.title}>{title}</div>
        {actions ? (
          <button>
            <EllipsisHorizontalIcon />
          </button>
        ) : null}
      </div>
    </div>
  );
};
