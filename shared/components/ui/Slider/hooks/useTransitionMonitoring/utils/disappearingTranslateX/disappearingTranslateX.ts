export const disappearingTranslateX = ({
  shift,
  width,
}: {
  shift: number;
  width: number;
}) => {
  if (shift > 1) {
    return -shift / 2 + width / 2;
  }

  if (shift < -1) {
    return -shift / 2 - width / 2;
  }

  return 0;
};
