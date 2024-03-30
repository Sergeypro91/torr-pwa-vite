import {
  FilmIcon,
  FolderArrowDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@torr/shared';

export const MENU_ROUTES = [
  {
    name: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Search',
    path: '/search',
    icon: <MagnifyingGlassIcon />,
  },
  {
    name: 'Files',
    path: '/files',
    icon: <FilmIcon />,
  },
  {
    name: 'Downloads',
    path: '/downloads',
    icon: <FolderArrowDownIcon />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <UserCircleIcon />,
  },
];
