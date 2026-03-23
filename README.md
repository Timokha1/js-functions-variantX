
## Функціонал
- `memoize(fn)` — універсальна функція для кешування результатів.
- `fibonacci(n)` — обчислення чисел Фібоначчі з використанням мемоїзації.
- `factorial(n)` — рекурсивне обчислення факторіала.
- `isPrime(n)` — швидка перевірка числа на те, чи є воно простим.
- `range(start, end, step)` — генерація масиву чисел у заданому діапазоні.
- `clamp(value, min, max)` — обмеження числа в межах мінімального та максимального значень.


##  Приклади використання




```javascript
### 1. memoize(fn)
import { memoize } from './utils.js';

const multiply = (a, b) => {
  console.log('складне множення');
  return a * b;
};

const memoizedMultiply = memoize(multiply);

console.log(memoizedMultiply(10, 10)); // Виведе: "Виконую" та 100
console.log(memoizedMultiply(10, 10)); // Виведе: 100 


2. fibonacci(n)
import { fibonacci } from './utils.js';

console.log(fibonacci(7));  // 13
console.log(fibonacci(40)); // 102334155

3. factorial(n)
import { factorial } from './utils.js';

console.log(factorial(5)); // 120 (1 * 2 * 3 * 4 * 5)
console.log(factorial(3)); // 6

4. isPrime(n)
import { isPrime } from './utils.js';

console.log(isPrime(11)); // true
console.log(isPrime(4));  // false
console.log(isPrime(1));  // false

5. range(start, end, step)
import { range } from './utils.js';

// Простий діапазон
console.log(range(1, 5));     // [1, 2, 3, 4, 5]

// Діапазон з кроком
console.log(range(0, 10, 2)); // [0, 2, 4, 6, 8, 10]

6. clamp(value, min, max)
import { clamp } from './utils.js';

console.log(clamp(50, 0, 10));  // 10 
console.log(clamp(-20, 0, 10)); // 0  
console.log(clamp(5, 0, 10));   // 5  

