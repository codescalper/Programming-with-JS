## Chapter 12 (ES6)

### Assignments

**12.1:** Guess the **Output** and Explain Why?

_[From video lecture 12.1]_

```js
let arr = [3, 4, 5, 7, 98, 0];

let [a, b, , c] = arr;

console.log(a, b, c);
```

**12.2:** Guess the **Output** And Explain Why?

_[From video lecture 12.1]_

```js
let arr = [1, 3, [2, 55], [9, 8, 7]];

let [a, , [b, c], d] = arr;

console.log(a, b, c, d);
```

**12.3:** Guess the **Output** and explain Why?

_[From video lecture 12.2]_

```js
let obj = {
  name: 'John',

  age: 25,

  weight: 70,
};

let { name: objName, age } = obj;

console.log(name, age);
```

**12.4:** You have given an array of **nums**.Create **shallow** copy of that array and store them in another **variable**

_[From video lecture 12.3]_

```js

let  nums  = [5,7,4,9,2,8];



let  newNums  =  "store Shallow copy of nums inside newNums variable")

```

**12.5:** You have given an array as below . Create a function which accept **multiple** elements as an argument and return last **4** element of the array

_[From video lecture 12.4]_

```js

Example:

let  nums  = [1,2,3,4,5,6,7,8];

input data: 1,2,3,4,5,6,7,8

output data: 5,6,7,8

```

**12.6:** Guess the **Output** And Explain Why?

_[From video lecture 12.6]_

```js
let nums = 0;

let result = nums ?? 50;

console.log(result);
```

**12.7:** You have given an object as below. You have to check wheather **physics** is the subject of that student or not, if true find the **score** of **physics** subject using **optional chaining**

```js
let student = {
  Math: {
    score: 75,
  },

  physics: {
    score: 85,
  },
};
```

**12.8:** Guess the **Output** And Explain Why?

_[From video lecture 12.7]_

```js
let nums = [2, 3, 4, 5, 6];

for (let key of nums) {
  console.log(key);
}
```

### More Practice Questions

**Question 1:** Guess the **Output** and Explain Why?

```js
let arr = [1, 2, 3, 4, 5];

let arr1 = [...arr];

arr1[2] = 10;

console.log(arr, arr1);
```

**Question 2:** You have given a list of variable names written in underscore. You have to write a program to convert them into camel casing format

```js

List  of  variable  names



Input

user_name

last_name

date_of_birth

user_password



Output

userName

lastName

dateOfBirth

userPassword

```

**Question 3:** Guess the **Output** and Explain why?

```js
function fun(a, b, ...c) {
  console.log(`${a}  ${b}`);

  console.log(c);

  console.log(c[0]);

  console.log(c.length);

  console.log(c.indexOf('google'));
}

fun('apple', 'sumsung', 'amazon', 'google', 'facebook');
```

**Question 4:** Guess the **Output** and Explain Why?

```js
const fruits = { apple: 8, orange: 7, pear: 5 };

const entries = Object.entries(fruits);

for (const [fruit, count] of entries) {
  console.log(`There are ${count}  ${fruit}s`);
}
```

**Question 5:** Write a program in which you have to set **Default** value in case of false input value using **Logical Assignment** Operator?

**Question 6:** Guess the **Output** and Explain Why?

```js
let arr = new Set([1, 2, 3, 1, 2, 1, 3, 4, 6, 7, 5]);

let length = arr.size;

console.log(arr, length);
```

**Question 7:** You have given **Set** below. Your task is to convert that **Set** into an **array**?

```js
input;

let set = new Set[(1, 2, 3, 2, 1, 3, 4, 12, 2)]();

output;

let arr = 'Do something here to convert....';
```

**Question 8:** Guess the **Output** and Explain Why?

**Note** : **Change** values of variable to examine the result.

```js
let number = 40;

let age = 18;

let result = number > 50 ? (age > 19 ? 'pass' : 'ageIssue') : 'numberIssue';

console.log(result);
```
