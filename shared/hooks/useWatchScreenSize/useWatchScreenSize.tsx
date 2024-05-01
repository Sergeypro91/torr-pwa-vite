import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash-es';

const RESIZE_WAIT = 50;

export const useWatchScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const debouncedHandleResize = useRef(
    debounce(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, RESIZE_WAIT),
  ).current;

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [debouncedHandleResize]);

  return { width, height };
};
