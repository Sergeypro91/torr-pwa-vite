import { MenuLink } from '@torr/shared';

import { MENU_ROUTES } from './constants.tsx';
import { useLogic } from './useLogick';
import style from './styles.module.css';

export const Footer = () => {
  const { isScrollDirUp } = useLogic();

  return (
    <footer id={isScrollDirUp ? style.hidden : ''} className={style.footer}>
      {MENU_ROUTES.map((menuRoute) => (
        <MenuLink
          key={menuRoute.path}
          path={menuRoute.path}
          name={menuRoute.name}
          icon={menuRoute.icon}
        />
      ))}
    </footer>
  );
};
