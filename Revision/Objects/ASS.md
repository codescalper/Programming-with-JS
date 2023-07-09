## Chapter 4 (Objects)

### Assignments

**4.1:** Guess the **Output** And Explain ?

```js
console.log(Math.round(Math.random() * 10));
```

**4.2:** Create an object called `country` for a country of your choice, containing properties `name` , `capital`, `language`, `population` and `neighbors`

1. Increase the country population by two million using **dot** notation.
2. Decrease the country population by one million using **bracket** notation.
3. Make `language` value in Uppercase.

_[From video lecture 4.1]_

**4.3:** Guess the **Output** and explain Why?

```js
let car = {
  color: 'Blue',

  model: 2021,

  company: 'Toyota',
};

let carColor = 'Blue';

console.log(car[carColor]);

console.log(car.carColor);
```

**4.4:** Create a method **describeCar** inside `car` object in which you have to print like this in console using template literals

_[From video lecture 4.3]_

**Company of my car is ** . It color is** And Model of my car is \_\_**

**4.5:** Generate random numbers between 0 and 10 using **trunc** method of **MATH** object

```js

Example

getRandomNumbers(){



}

Ouput  value  0-10

```

**4.6:** Guess the **Output** and Explain Why?

_[From video lecture 4.4]_

```js

let  arr  = [1,2,3,4];

arr.forEach(elem  =>{

if(elem  ==  1){

continue;

}

console.log(elem);

})

```

**4.7:** Guess the **Output** And explain Why?

**Important Note**: if there is any error, How we can solve that **error**?

_[From video lecture 4.7]_

```js
let airplane = {
  flightName: 'fly india',

  atacode: 'FI',

  ratings: 4.9,

  book(passenger, flightNum) {
    console.log(
      `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
    );
  },
};

let bookMethod = airplane.book;

bookMethod('john', 8754);
```

**4.8:** Guess the **Output** And Explain Why?

_[From video lecture 4.9]_

```js
let arr = [1, 2, 3, 4];

for (let elem in arr) {
  console.log(elem);
}
```

**4.9:** You have to create a **Shopping_Cart** array with following features :

- **addItem(itemName)** : this function should add string itemName to cart

- **removeItem(itemName)**: this function should remove any item which matches itemName. _Hint : search for index of itemName and then remove it_

- **cartSize()** : returns size of cart in terms of number of cart Items.
