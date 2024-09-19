import { memoize } from './memoize';

describe('memoize', () => {
  test('memoizeFactorial', () => {
    type NumToNum = (n: number) => number;
    const memoizeFactorial: NumToNum = memoize((n: number) => {
      if (n <= 1) return 1;
      return n * memoizeFactorial(n - 1);
    });
    expect(memoizeFactorial(3)).toBe(6);
    expect(memoizeFactorial(5)).toBe(120);
    expect(memoizeFactorial(5)).toBe(120);
  });

  test('memoizeAdd', () => {
    const memoizeAdd = memoize((...args: number[]) =>
      [...args].reduce((a, b) => a + b)
    );
    expect(memoizeAdd(5)).toBe(5);
    expect(memoizeAdd(5)).toBe(5);
    expect(memoizeAdd(3, 2, 1)).toBe(6);
    expect(memoizeAdd(5, 4, 3, 2, 1)).toBe(15);
    expect(memoizeAdd(1, 3, 2)).toBe(6);
    expect(memoizeAdd(4, 5, 3, 2, 1)).toBe(15);
  });
});
