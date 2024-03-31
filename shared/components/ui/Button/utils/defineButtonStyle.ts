import { CSSProperties } from 'react';

import { TButtonColor } from '../types.ts';
import { COLORS } from '../constants.ts';

export const defineButtonStyle = (color: TButtonColor) => {
  switch (color) {
    case 'success':
      return { '--local-color': COLORS.success } as CSSProperties;
    case 'warning':
      return { '--local-color': COLORS.warning } as CSSProperties;
    case 'error':
      return { '--local-color': COLORS.error } as CSSProperties;
    default:
      return { '--local-color': COLORS.primary } as CSSProperties;
  }
};
