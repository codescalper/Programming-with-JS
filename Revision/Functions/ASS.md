## Chapter 3 (Functions)

### Assignments

**3.1:** Create a **function Declaration** called `describeYourState` Which take three parameters `Population`, `traditional food` and `historical place`. Based on this input function should return a `String` with this format.

**My state population is ** Its traditional food is ** and historical place name is \_\_\_**

**3.2:** Create a **function expression** which does the exact same thing as defined in **Question 1**

**3.3:** Create function **addition** which takes two numbers as an argument And return the result of **sum of two numbers**

**Important Note**: In the function call you are **not** passing any **parameter**. You can modify function to achieve this.

_[From video lecture 3.2]_

```js
Example;

function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition()); //You are not allowed to modify this line any more
```

**3.4:** Identify which **type** of value passed below into the function **greet()**. What will be the return value of greet ?

```js
let person = {
  name: 'john',

  age: 25,
};

function greet(person) {
  person.name = `Mr ${person.name}`;

  return `Welcome ${person.name}`;
}

greet(person);
```

**3.5:** Create **higher** order function named as `transformer` which take `string` and `firstUpperCaseWord` function as an arguments. `firstUpperCaseWord` is function which make first word UpperCase from a given `String`.

_[From video lecture 3.5]_

**3.6:** create function which will display Your name after every 5 seconds

_[From video lecture 3.8]_

```js

input

let  yourName  =  "john";



output

"john"  after  5  second

"john"  after  5  second

"john"  after  5  second

"john"  after  5  second

.

.

.

and  so  on.

```

**3.7:** Guess the **Output** And Explain Why?

_[From video lecture 3.4]_

```js
let arrowFunction = (name = 'Coders') => {
  `Welcome ${name}`;
};

console.log(arrowFunction('Programmers'));
```

**3.8:** Create a JavaScript **Function** to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : **Area = Square root of√s(s - a)(s - b)(s - c)** where **s** is half the perimeter, or **(a + b + c)/2**.

```js
input: area_of_triangle(5, 6, 7);

output: 14.69;
```

**3.9:** Create a JavaScript **Function** to capitalize the first letter of each word of a given string.

```js
input: capitalize('we are the champions');

output: 'We Are The Champions';
```
