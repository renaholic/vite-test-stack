import create from 'zustand';

interface CountState {
  count: number;
  incrment: () => void;
}

const useCount = create<CountState>((set, get) => ({
  count: 0,
  incrment: () => set(({ count }) => ({ count: count + 1 })),
}));

export { useCount };
