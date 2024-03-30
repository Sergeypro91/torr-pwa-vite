import { PropsWithChildren, createContext, useMemo } from 'react';

import { useLogic } from '@torr/shared/components/PageLayout/useLogic';

import { Content } from './Content';
import { Header } from './Header';
import style from './styles.module.css';

type PageLayoutContextType = {
  scrollCoefficient: number;
  setScrollCoefficient: (state: number) => void;
};

export const PageLayoutContext = createContext<PageLayoutContextType>(
  {} as PageLayoutContextType,
);

type PageLayoutType = PropsWithChildren & {
  withTopPadding?: boolean;
};

export const PageLayout = (props: PageLayoutType) => {
  const { children, withTopPadding = false } = props;
  const { scrollCoefficient, setScrollCoefficient } = useLogic();
  const value = useMemo(
    () => ({ scrollCoefficient, setScrollCoefficient }),
    [scrollCoefficient, setScrollCoefficient],
  );

  return (
    <PageLayoutContext.Provider value={value}>
      <div
        className={style.page}
        id={withTopPadding ? style['with-padding'] : ''}
      >
        {children}
      </div>
    </PageLayoutContext.Provider>
  );
};

PageLayout.Content = Content;
PageLayout.Header = Header;
