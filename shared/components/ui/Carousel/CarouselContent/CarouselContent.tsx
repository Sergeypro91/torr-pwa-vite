import * as React from 'react';

import { cn } from '@torr/shared';
import { Orientation } from '@torr/shared/components/ui/Carousel/enums.ts';

import { useCarousel } from '../hooks';

import style from './styles.module.css';

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  const carouselOrientation =
    orientation === Orientation.HORIZONTAL ? style.horizontal : style.vertical;

  return (
    <div ref={carouselRef} className={style['carousel-content-wrapper']}>
      <div
        ref={ref}
        className={cn([
          style['carousel-content'],
          carouselOrientation,
          className,
        ])}
        {...props}
      />
    </div>
  );
});

CarouselContent.displayName = 'CarouselContent';
