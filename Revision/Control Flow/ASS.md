## Chapter 1 (Data Types)

### Assignments

**1.1:** Create a code to check difference between `null` and `undefined` data type. Also check their type using `typeof`.

**1.2:** Which type of variables (var, let or const) must be **initialized** at the time of declaration?

**1.3:** Guess the **Output** and Explain Why?

_[From video lecture 1.5]_

```js
let languages = 'java javaScript python cSharp';

let result = languages.lastIndexOf('S');

console.log(result);
```

**1.4:** Guess the **Output** and Explain Why?

_[From video lecture 1.8]_

```js
let variable = 'hello programmers';

let result = Number(variable);

console.log(result);
```

**1.5:** Guess the **Output** and Explain Why?

```js
let num1 = 32;

let num2 = '32';

let result1 = num1 !== num2;

let result2 = num1 != num2;

console.log(result1, result2);
```

**1.6:** Guess the **Output** and explain Why?

```js
let str = 'Hello Programmers';

let result = str.includes('r');

console.log(result);
```

**1.7:** Guess the **Output** and Explain Why?

_[From video lecture 1.6]_

```js
let num1 = 2;

let num2 = 5;

let result = num1 ** num2 * 2;

console.log(result);
```

**1.8:** Guess the **Output** and Explain Why?

```js
let num1 = [1, 2, 4, 5];

let num2 = [6, 5, 8, 0];

let result = num1.concat(num2);

console.log(result);
```

**1.9:** Guess the **Output** and Explain Why?

```js
let a = 5;

let b = 7;

let c = 8;

let result = a < b > c;

console.log(result);
```

**1.10:** If your State is split into **four** equal parts such that in each part there are **1/4** number of people live. You have to find how many people would live in each part? which operators will you use ?