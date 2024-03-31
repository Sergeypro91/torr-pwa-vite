import React from 'react';

import { Link } from '../../external.ts';

import style from './styles.module.css';

type MenuLinkProps = {
  path: string;
  name: string;
  icon: React.JSX.Element;
};

export const MenuLink = ({ path, name, icon }: MenuLinkProps) => {
  return (
    <Link
      key={path}
      to={path}
      className={style.link}
      activeProps={{ id: style.active }}
    >
      <span className={style.icon}>{icon}</span>
      <span className={style.name}>{name}</span>
    </Link>
  );
};
