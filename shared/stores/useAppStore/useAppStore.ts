import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TScreenDimension = { width: number; height: number };

type TUseAppStore = {
  screenDimension: TScreenDimension;

  setScreenDimension: (screenDimension: TScreenDimension) => void;
};

export const useAppStore = create<TUseAppStore>()(
  devtools((set) => ({
    screenDimension: { width: 0, height: 0 },

    setScreenDimension: (screenDimension) => set(() => ({ screenDimension })),
  })),
);
