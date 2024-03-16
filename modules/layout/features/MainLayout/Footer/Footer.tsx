import { Link } from '@torr/shared';

export const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/files">Files</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/profile">Profile</Link>
    </footer>
  );
};
