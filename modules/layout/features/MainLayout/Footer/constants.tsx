import { Download, File, Home, Profile, Search } from '@torr/shared';

export const MENU_ROUTES = [
  {
    name: 'Home',
    path: '/',
    icon: <Home />,
  },
  {
    name: 'Search',
    path: '/search',
    icon: <Search />,
  },
  {
    name: 'Files',
    path: '/files',
    icon: <File />,
  },
  {
    name: 'Downloads',
    path: '/downloads',
    icon: <Download />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <Profile />,
  },
];
