 /**
 * Створює мемоїзовану версію функції.
 * @param {Function} fn
 * @returns {Function}
 */
export const memoize = (fn) => 
  {
  const cache = new Map();
  return (...args) => 
    {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

/**
 * Обчислює число Фібоначчі рекурсивно.
 * @param {number} n
 * @returns {number|null}
 */
const fib = (n) => 
  {
  if (n === null || n === undefined || n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};

export const fibonacci = memoize(fib);

/**
 * Обчислює факторіал числа рекурсивно.
 * @param {number} n
 * @returns {number|null}
 */
export const factorial = (n) =>
   {
  if (n === null || n === undefined || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

/**
 * Перевіряє, чи є число простим.
 * @param {number} n
 * @returns {boolean}
 */
export const isPrime = (n) => 
  {
  if (n === null || n === undefined || n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
     {
    if (n % i === 0) return false;
  }
  return true;
};

/**
 * Генерує масив числового діапазону.
 * @param {number} start 
 * @param {number} end 
 * @param {number} step 
 * @returns {number[]}
 */
export const range = (start, end, step = 1) => 
  {
  if (start === null || end === null || step <= 0) return [];
  const result = [];
  for (let i = start; i <= end; i += step) 
    {
    result.push(i);
  }
  return result;
};

/**
 * Обмежує значення в заданому діапазоні.
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {number|null}
 */
export const clamp = (value, min, max) => {
  if (value === null || value === undefined) return null;
  return Math.max(min, Math.min(max, value));
};