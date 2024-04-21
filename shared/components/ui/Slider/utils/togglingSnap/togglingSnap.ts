import { SNAP_STYLE_NAME } from '../../constants.ts';

export const togglingSnap = ({
  elem,
  leftPosition,
}: {
  elem: HTMLElement;
  leftPosition: number;
}) => {
  elem.scrollLeft = leftPosition;
  elem.style.scrollSnapType = 'none';

  const timeout = setTimeout(() => {
    elem.style.removeProperty(SNAP_STYLE_NAME);
    clearTimeout(timeout);
  }, 100);
};
