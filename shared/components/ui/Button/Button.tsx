import React, { ElementRef, MouseEvent, forwardRef, useState } from 'react';

import { cn } from '../../utils';

import { TButton } from './types.ts';
import { defineButtonStyle } from './utils';
import style from './styles.module.css';

export const Button = forwardRef<ElementRef<'button'>, TButton>(
  (props, ref) => {
    const {
      size = 'medium',
      variant = 'text',
      color = 'primary',
      iconStart: IconStart = null,
      iconEnd: IconEnd = null,
      active = false,
      fullWidth = false,
      children,
      className,
      onClick,
      ...restProps
    } = props;
    const [isTrigger, setIsTrigger] = useState(false);

    const onClickHandle = (
      event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ) => {
      setIsTrigger(true);
      !onClick || onClick(event);
    };

    const onAnimationHandle = () => {
      setIsTrigger(false);
    };

    return (
      <button
        ref={ref}
        className={cn([
          style['button-wrapper'],
          fullWidth && style['button-full-width'],
          className,
        ])}
        style={defineButtonStyle(color)}
        onClick={onClickHandle}
        {...restProps}
      >
        <div
          className={cn([
            style['button-base'],
            style[`button-${size}`],
            style[`button-${variant}`],
            active && style['button-active'],
            children && style['button-with-text'],
            fullWidth && style['button-full-width'],
          ])}
        >
          <span
            className={cn([style['button-inner'], isTrigger && style.scale])}
          >
            {IconStart}
            {children}
            {IconEnd}
          </span>
        </div>
        <span
          className={cn([style.ripple, isTrigger && style['ripple-triggered']])}
          onAnimationEnd={onAnimationHandle}
        />
      </button>
    );
  },
);
