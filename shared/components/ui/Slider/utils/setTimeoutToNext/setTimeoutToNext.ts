import { RefObject } from 'react';

import { setElemProp } from '@torr/shared';

type TSetTimeoutToNextOptions = {
  markerBarRef: RefObject<HTMLUListElement>;
  timeoutToNext: number;
};

export const setTimeoutToNext = ({
  markerBarRef,
  timeoutToNext,
}: TSetTimeoutToNextOptions) => {
  const markerBarElem = markerBarRef.current;

  if (markerBarElem) {
    setElemProp({
      element: markerBarElem,
      propName: '--timeout-to-next',
      propValue: `${timeoutToNext}ms`,
    });
  }
};
