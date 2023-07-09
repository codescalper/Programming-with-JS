//4.1

console.log(Math.round(Math.random()*10))

// Math.random() will give random number between 0 to 1
// * 10 will give the number btw 1-10 . somehitng
// round will round it to nearest integer


//4.2


let country = {
    name : "India",
    capital: "Delhi",
    language: "Hindi",
    poplulation: 10000,
    neighbors: "Sri Laanka"
}

country.poplulation+=200000;
country['poplulation']-=100000;
country.language=country.language.toUpperCase(); 
 
console.log(country)

//4.3 

// both will be undefined

let car = {
    color: 'Blue',
  
    model: 2021,
  
    company: 'Toyota',
  };
  
  let carColor = 'Blue';
  
  console.log(car[carColor]); // we pass here key not the values
  
  console.log(car.carColor); //there is no key named 'carColor in the output'
//4.4


let cars = {
    company:'Maruti',
    color:"black",
    model:2023,
    describeCar :function(){
        console.log(`Company of my car is ${this.company} it color is ${this.color} And Model of my car is ${this.model} `)
    }

}

cars.describeCar()
//4.5
// trunc is used to escape the decimal points

let randomNum = Math.trunc(Math.random() *10)
console.log(randomNum)


//4.6


// let  arr  = [1,2,3,4];

// arr.forEach(elem  =>{

// if(elem  ==  1){

// continue; //syntax error because continue is used in traditional loop like for while do-while only it can't be used in arrow function

// }

// console.log(elem);

// })

let airplane = {
    flightName: 'fly india',
  
    atacode: 'FI',
  
    ratings: 4.9,
  
    book(passenger, flightNum) { //in objects while defininf a function you can skip the function keyword
      console.log(
        `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
      );
    },
  };
  
  let bookMethod = airplane.book; //by doing this book has lost his this reference so it'll show undefined
  //
  
  bookMethod('john', 8754);


  let arr = [1, 2, 3, 4];

for (let elem in arr) {
  console.log(elem); //this will log the indices of the array
}


let shopping_cart = {
    cart: [],
    addItems(itemName){
        this.cart.push(itemName)
    },
    removeItem(itemName){
        const index = this.cart.indexOf(itemName)
        if(index!==-1){
            this.cart.splice(index,1)
        }
    },
    cartSize(){
        this.cart.length
    }

}

console.log(shopping_cart.cartSize)
shopping_cart.addItems('Soap')
shopping_cart.addItems('Shampoo')
console.log(shopping_cart.cartSize)
console.log(shopping_cart.cart)









