import { MenuLink } from '@torr/shared';

import { MENU_ROUTES } from './constants.tsx';
import { useLogic } from './useLogick';
import style from './styles.module.css';

export const Footer = () => {
  const { isScrollDirUp, isHover, handleHover } = useLogic();

  return (
    <footer
      id={isScrollDirUp && !isHover ? style.hidden : ''}
      className={style.footer}
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
