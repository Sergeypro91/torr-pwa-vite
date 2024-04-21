import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TUseStore = {
  leftSlideId: number;
  rightSlideId: number;
  prevSlideId: undefined | number;
  biggestSlideId: number;
  isScrolling: boolean;

  setLeftSlideId: (leftSlideId: number) => void;
  setRightSlideId: (rightSlideId: number) => void;
  setBiggestSlideId: (biggestSlideId: number) => void;
  setIsScrolling: (isScrolling: boolean) => void;
};

export const useStore = create<TUseStore>()(
  devtools((set) => ({
    leftSlideId: 0,
    rightSlideId: 0,
    prevSlideId: undefined,
    biggestSlideId: 0,
    isScrolling: false,

    setLeftSlideId: (leftSlideId) =>
      set((state) => ({ prevSlideId: state.leftSlideId, leftSlideId })),
    setRightSlideId: (rightSlideId) => set(() => ({ rightSlideId })),
    setBiggestSlideId: (biggestSlideId) => set(() => ({ biggestSlideId })),
    setIsScrolling: (isScrolling) => set(() => ({ isScrolling })),
  })),
);
