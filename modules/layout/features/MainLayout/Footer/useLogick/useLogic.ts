import { useState } from 'react';

import { useMenuScroll } from '../hooks';

export const useLogic = () => {
  const { isScrollDirUp } = useMenuScroll();
  const [isHover, setIsHover] = useState(false);

  const handleHover = (state: boolean) => {
    setIsHover(state);
  };

  return { isScrollDirUp, isHover, handleHover };
};
