import { HTMLAttributes, forwardRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@torr/shared';

import { Orientation } from './enums.ts';
import { CarouselContext, CarouselProps } from './CarouselContext';
import style from './styles.module.css';

export const Carousel = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = Orientation.HORIZONTAL,
      opts,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === Orientation.HORIZONTAL ? 'x' : 'y',
      },
      plugins,
    );

    return (
      <CarouselContext.Provider
        value={{
          api,
          opts,
          carouselRef,
          orientation:
            orientation ||
            (opts?.axis === 'y'
              ? Orientation.VERTICAL
              : Orientation.HORIZONTAL),
        }}
      >
        <div
          ref={ref}
          role="region"
          aria-roledescription="carousel"
          className={cn([style['carousel-wrapper'], className])}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);

Carousel.displayName = 'Carousel';
