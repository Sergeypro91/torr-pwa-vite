import { MenuLink, cn } from '@torr/shared';

import { MENU_ROUTES } from './constants.tsx';
import { useLogic } from './useLogick';
import style from './styles.module.css';

export const Footer = () => {
  const { isScrollDirUp, isHover, handleHover } = useLogic();

  return (
    <footer
      className={cn([style.footer, isScrollDirUp && !isHover && style.hidden])}
      onPointerOver={() => handleHover(true)}
      onPointerLeave={() => handleHover(false)}
    >
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
