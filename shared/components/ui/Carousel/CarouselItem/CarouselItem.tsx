import * as React from 'react';

import { cn } from '@torr/shared';

import { useCarousel } from '../hooks';

import style from './styles.module.css';

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn([
        style['carousel-item'],
        orientation === 'horizontal' ? style.horizontal : style.vertical,
        className,
      ])}
      {...props}
    />
  );
});

CarouselItem.displayName = 'CarouselItem';
