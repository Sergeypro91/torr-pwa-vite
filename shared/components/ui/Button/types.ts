import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TButton = ComponentPropsWithoutRef<'button'> & {
  size?: TButtonSize;
  variant?: TButtonVariant;
  color?: TButtonColor;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  active?: boolean;
  fullWidth?: boolean;
};

export type TButtonSize = 'small' | 'medium' | 'large';

export type TButtonVariant = 'text' | 'contained' | 'outlined';

export type TButtonColor = 'primary' | 'success' | 'warning' | 'error';
