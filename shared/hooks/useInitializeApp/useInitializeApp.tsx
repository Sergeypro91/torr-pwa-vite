import { useEffect } from 'react';

import { useAppStore, useWatchScreenSize } from '@torr/shared';

export const useInitializeApp = () => {
  const setScreenDimension = useAppStore((state) => state.setScreenDimension);
  const { width, height } = useWatchScreenSize();

  useEffect(() => {
    setScreenDimension({ width, height });
  }, [width, height, setScreenDimension]);
};
