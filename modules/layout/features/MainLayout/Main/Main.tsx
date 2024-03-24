import { PropsWithChildren } from 'react';

import style from './styles.module.css';

export const Main = ({ children }: PropsWithChildren) => {
  return <main className={style.main}>{children}</main>;
};
