## Chapter 7 (Array Methods)

### Assignments

**7.1:** You have given array of **strings**. Your task is to obtain last **two** elements of given array using **slice** method?

```js
Input;

let admins = ['john', 'paul', 'Neha', 'harry'];

Ouput[('Neha', 'harry')];
```

**7.2:** You have given an array of **5** elements(1-5). Your task is defined as below.

_[From video lecture 7.2]_

```js
const arr = [1, 4, 7, 6, 8];
```

1. You have to delete **2** elements starting from index **2**.

2. You have to add **3** new elements on index **1** choice.

3. Display the **2 deleted** elements in console (from step 1)

**7.3:** What happens if we use **negative** number inside **slice** method?

```js
const arr = [1, 4, 7, 6, 8];
```

Example : arr.slice(-2);

**7.4:** Write **three** different methods/approaches to get **last** element of the array?

```js
const arr = [1, 4, 7, 6, 8];
```

_[From video lecture 7.3]_

**7.5:** You have given an array of **nums**. Create new Array with the help of **nums** array. In new Array each element will be a result of **multiplication by 2** of the original array element

```js
const arr = [1, 4, 7, 6, 8];
```

_[From video lecture 7.4]_

```js
Example: Input;

let nums = [1, 2, 3, 4, 5];

output;

updatedNums = [2, 4, 6, 8, 10];
```

**7.6** You have given an array of **scores** in which score of each student stored. Create a new array with the help of original **scores** array in which only those scores exist **greater** than 75%

```js
const arr = [10, 40, 70, 60, 80];
```

_[From video lecture 7.5]_

```js
let totalScore = 150;

let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];
```

**7.7:** You have given an array of numbers **nums**. You have to find **sum** of all array elements using **reduce** method?

```js
let nums = [2, 3, 5, 7, 8, 4, 9];
```

**7.8:** You have given an array of numbers **nums**. You have to find the index of value **8** using **built-in** method of array?

```js
let nums = [2, 3, 5, 6, 8, 6, 4, 8];
```

**7.9:** You have given an array of **objects** of users as below. Find the specified **user** with `name = "John" `

Also find the **position** `(index+1)` of that **user** inside the array?

```js
let users = [
  {
    name: 'Paul',

    age: 24,

    verified: true,
  },

  {
    name: 'John',

    age: 21,

    verified: false,
  },

  {
    name: 'Neha',

    age: 19,

    verify: true,
  },
];
```

**7.10:** Guess the **Output** and explain Why?

```js
let nums = [1, 2, 4, 5, [6, [8]], [9, 0]];

let res1 = nums.flat(1);

let res2 = nums.flatMap((elem) => elem);

console.log(res1, res2);
```

**7.11:** You have given an array of `nums`. Write a program to `sort` the elements of array in `descending` order **using built-in** method of array.

```js
Input;

let nums = [5, 1, 4, 6, 8, 3, 9];

Output[(9, 8, 6, 5, 4, 3, 1)];
```

**7.12:** Guess the **Output** and Explain Why?

_[From video lecture 7.13]_

```js
let arr = [1, 2, 3, 4];

let result = arr.splice(1, 2).pop();

console.log(result);
```

**7.13:** You have given an array of numbers `nums` You have to check if all elements of the **array > 15** using **built-in** array method. return `true` or `false`

_[From video lecture 7.9]_

```js
let nums = [16, 17, 18, 28, 22];
```

### More Practice Questions (Arrays)

**Question 1:** Guess the **Output** And explain Why?

```js
let strArray = [1, 2, 3, 4, 5];

let result = strArray.reverse();

console.log(result == strArray);
```

**Question 2:** You have **given** two **arrays** below as an example. Your task is to **combine** them into one By using array method

```js
input;

let arr1 = [1, 2, 3, 4, 5];

let arr2 = [6, 7, 8, 9, 10];

ouput[(6, 7, 8, 9, 10, 1, 2, 3, 4, 5)];
```

**Question 3:** You have given an array of **letters** below. Convert that array into string of letters **Without Space**

```js
input;

let arr = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];

output;

('abhishek');
```

**Question 4:** Guess the **Output** and explain why?

```js
let arr = [11, 62, 1, 27, 8, 5];

let sorted = arr.sort();

console.log(sorted);
```

**Question 5:** Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following thing in order:

1. Calculate the dog `age` in human years using the following formula: if the `dogAge <= 2 years` old, `humanAge = 2 \* dogAg`e. If the `dog is > 2 years` old, `humanAge = 16 + dogAge`

```js

Test  data



let  arr  = [12,2,5,12,8,13,9];

```

**Question 6:** Guess the **Output** and Explain Why?

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let elem = arr.at(-1);

console.log(elem);
```

**Question 7:** Guess the **Output** and Explain why?

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let result = arr.slice(2, 5).splice(0, 2, 21).pop();

console.log(result, arr);
```
