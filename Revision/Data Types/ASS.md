## Chapter 2 (Control Flow / Conditional)

### Assignments:

**2.1:** Guess the **Output** And Explain Why?

```js
let i = 4;

for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) {
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}
```

**2.2:** Guess the **Output** and Explain Why?

```js
let i = 0;

for (i; i < 5; i++) {
  console.log(i);
}
```

**2.3:** Write a simple **Program** in which You have to print first **10** numbers in **descending** order (10...1)?

**2.4:** Lets say `John` is looking a new `country` to live in. He want to live in a country that speaks `English`, has less than 10 million people. One of the `food` option between these two must present `Spanish food` OR `English food`.

**Write** an if/else if statement to help john figure out Your country is right for him?

_[From video lecture 2.4]_

**2.5:** Guess the **Output** And Explain Why?

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
```

**2.6:** use **nested-if** statement to check your `age>18`

than check your height `height > 5.10`.

If **both** true show any message(**I can sit in exam**) in the console?

**2.7:** Create two variables `grade` and `passingYear`.Check if your `grade == "A"` and `passingYear < 2020` with the help of **ternary** operator(Not allowed to use any logical operator).If both condition `true` print on console **Qualify**. Otherwise **Fail**

_[From video lecture 2.9]_