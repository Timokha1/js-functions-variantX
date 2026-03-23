import { fibonacci, factorial, isPrime, range, clamp, memoize } from './mathUtils';

describe('Math Utilities Tests', () => {
  test('fibonacci: should return correct values and handle edge cases', () => 
    {
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(-1)).toBeNull();
    expect(fibonacci(null)).toBeNull();
  });

  test('factorial: should return correct values', () => 
    {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(null)).toBeNull();
  });

  test('isPrime: should correctly identify prime numbers', () => 
    {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(null)).toBe(false);
  });

  test('range: should generate correct array', () =>
     {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 10, 5)).toEqual([0, 5, 10]);
    expect(range(null, 5)).toEqual([]);
  });

  test('clamp: should restrict value to range', () =>
     {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('memoize: speed comparison', () =>
     {
    const slowFib = (n) => (n <= 1 ? n : slowFib(n - 1) + slowFib(n - 2));
    const fastFib = memoize(slowFib);

    const startSlow = performance.now();
    slowFib(30);
    const endSlow = performance.now();

    const startFast = performance.now();
    fastFib(30);
    const endFast = performance.now();

    expect(endFast - startFast).toBeLessThan(endSlow - startSlow);
  });
});